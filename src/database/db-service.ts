import SQLite from 'react-native-sqlite-storage';
import { UserDTO } from '../DTO/UserDTO';


export class DataBaseService {

    // private db: SQLite.SQLiteDatabase;

    
    private  db: SQLite.SQLiteDatabase | null = null;


    // constructor() {
    //   this.db = SQLite.openDatabase(
    //     {
    //       name: 'data-hub-database.db',
    //       location: 'default',
    //       createFromLocation: 1,
    //     },
    //     () => {
    //       console.log('Banco de dados aberto com sucesso!');
    //       this.createTable();
    //     },
    //     (error) => {
    //       console.error('Erro ao abrir o banco de dados:', error);
    //     }
    //   );
    // }

    private static db: SQLite.SQLiteDatabase | null = null;

  constructor() {
    if (DataBaseService.db) {
      // Se o banco de dados já foi aberto anteriormente, use-o
      this.db = DataBaseService.db;
      console.log('Banco de dados já foi aberto anteriormente.');
    } else {
      // Se o banco de dados ainda não foi aberto, abra-o
      this.openDatabase();
    }
  }

  private openDatabase() {
    DataBaseService.db = SQLite.openDatabase(
      {
        name: 'data-hub-database.db',
        location: 'default',
        createFromLocation: 1,
      },
      () => {
        console.log('Banco de dados aberto com sucesso!');
        this.createTable();
      },
      (error) => {
        console.error('Erro ao abrir o banco de dados:', error);
      }
    );
  }


    createTable() {
        this.db?.transaction((tx) => {
          tx.executeSql(
            'SELECT name FROM sqlite_master WHERE type="table" AND name="users"',
            [],
            (_, results) => {
              if (results.rows.length === 0) {
             
                tx.executeSql(
                  'CREATE TABLE users (id INTEGER PRIMARY KEY AUTOINCREMENT, firstName TEXT, login TEXT, password TEXT)',
                  [],
                  () => {
                    console.log('Tabela de usuários criada com sucesso!');
                  },
                  (error) => {
                    console.error('Erro ao criar a tabela de usuários:', error);
                  }
                );
              } else {
      
                console.log('Tabela já existe e por isso não foi criada.');
              }
            },
            (error) => {
              console.error('Erro ao verificar a existência da tabela:', error);
            }
          );
        });
      }
  
    createUser(user: UserDTO) {
        this.db.transaction((tx) => {
        
          tx.executeSql(
            'SELECT COUNT(*) AS count FROM users WHERE login = ?',
            [user.login],
            (_, results) => {
              const count = results.rows.item(0).count;

              if (count === 0) {
        
                tx.executeSql(
                  'INSERT INTO users (firstName, login, password) VALUES (?, ?, ?)',
                  [user.firstName, user.login, user.password],
                  (_, results) => {
                    console.log('Registro inserido com sucesso! ID: ' + results.insertId);
                  },
                  (error) => {
                    console.error('Erro ao inserir registro:', error);
                  }
                );
              } else {
              
                console.log('Usuário com esse login já cadastrado no sistema');
              }
            },
            (error) => {
              console.error('Erro ao verificar login existente:', error);
            }
          );
        });
      }

    async getUserDTOByLogin(loginToSearch: string): Promise<UserDTO | null> {
        try {
          return new Promise<UserDTO | null>((resolve, reject) => {
            this.db.transaction((tx) => {
              tx.executeSql(
                'SELECT * FROM users WHERE login = ?',
                [loginToSearch],
                (_, results) => {
                  const userDTO = results.rows.item(0);
    
                  if (userDTO) {
                    const user = new UserDTO(
                      userDTO.firstName,
                      userDTO.login,
                      userDTO.password
                    );
                    resolve(user);
                  } else {
                    resolve(null); 
                  }
                },
                (error) => {
                  reject(error);
                }
              );
            });
          });
        } catch (error) {
          console.error('Erro ao buscar usuário:', error);
          throw error;
        }
      }
    

  }