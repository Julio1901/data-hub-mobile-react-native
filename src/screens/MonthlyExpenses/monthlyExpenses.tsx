import React, { useEffect, useRef, useState } from 'react';
import {ActivityIndicator, FlatList} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Expense} from '../../DTO/ExpenseDTO';
import {ExpenseListItem} from './components/expenseListItem';
import {ExpenseListContainer, ExpenseListLoadingContainer, ExpenseTitle, ExpenseTitleContainer,  ExpenseTypeDropDownListContainer,  MainContainer, RangeSliderContainer, SearchContainer, TotalExpensesText, TotalExpensesTitle} from './styles';
import { DropDownList } from '../../components/DropDownList/dropDownList';
import { IDropDownSelectableItemProps } from '../../components/DropDownList/DropDownSelectableItem/dropDownSelectableItem';
import { DefaultSearch } from '../../components/Search/DefaultSearch';
import { DefaultRangeFilterButton } from '../../components/RangeFilter/RangeFilter';
import { RangeSlider } from '../../components/RangeSlider/RangeSlider';
import * as Progress from 'react-native-progress';

const MonthlyExpensesScreen = () => {

  const [rangeFilterIsVisible, setRangeFilterIsVisible] = useState(false)
  const [expenseLoadingIsVisible, setExpenseLoadingIsVisible ] = useState(false)

  const handleWithRangeFilterButtonPress = () => {
    setRangeFilterIsVisible(!rangeFilterIsVisible)
    // setExpenseLoadingIsVisible(!expenseLoadingIsVisible)
  }


  const expensesMockTest = [
    new Expense('Conta de luz', 1000, 'fixed', false),
    new Expense('Gás', 4000, 'fixed', false),
    new Expense('Investimentos', 5000, 'variable', true),
    new Expense('IPVA Carro', 10000, 'variable', true),
    new Expense('Gym Pass', 3000, 'fixed', false),
    new Expense('Conta de luz', 1000, 'fixed', false),
    new Expense('Gás', 4000, 'fixed', false),
    new Expense('Investimentos', 5000, 'variable', true),
    new Expense('IPVA Carro', 10000, 'variable', true),
    new Expense('Gym Pass', 3000, 'fixed', false),
    new Expense('Telefone', 120, 'fixed', false),
    new Expense('Internet', 240, 'fixed', false),
    new Expense('Café da Manhã', 300, 'fixed', false),
    new Expense('Transporte Público', 600, 'variable', true),
    new Expense('Almoço', 1500, 'variable', true),
    new Expense('Cinema', 250, 'variable', false),
    new Expense('Restaurante', 800, 'variable', true),
    new Expense('Café Expresso', 150, 'fixed', false),
    new Expense('Seguro de Vida', 2000, 'fixed', true),
    new Expense('Assinatura de Streaming', 300, 'fixed', true),
    new Expense('Roupas', 900, 'variable', true),
    new Expense('Manutenção do Carro', 1200, 'fixed', true),
    new Expense('Educação', 750, 'variable', true),
    new Expense('Livros', 180, 'fixed', false),
    new Expense('Academia', 500, 'fixed', false),
    new Expense('Internet Móvel', 180, 'fixed', true),
    new Expense('Presentes', 750, 'variable', false),
    new Expense('Aluguel de Filme', 50, 'fixed', false),
    new Expense('Taxa de Estacionamento', 350, 'fixed', true),
    new Expense('Assinatura de Revista', 180, 'fixed', true),
    new Expense('Combustível', 500, 'variable', true),
    new Expense('Farmácia', 420, 'variable', false),
    new Expense('Lavanderia', 400, 'fixed', false),
    new Expense('Reparos Domésticos', 750, 'variable', true),
    new Expense('Médico', 900, 'variable', true),
    new Expense('Material de Escritório', 120, 'fixed', false),
    new Expense('Assinatura de Ginásio', 300, 'variable', true),
    new Expense('Assinatura de Música', 200, 'fixed', false),
    new Expense('Refeições Fora de Casa', 800, 'variable', true),
    new Expense('Impostos', 650, 'fixed', true),
    new Expense('Educação Continuada', 1000, 'variable', true),
    new Expense('Hobbies', 350, 'variable', false),
    new Expense('Presentes de Aniversário', 180, 'fixed', false),
    new Expense('Despesas de Viagem', 1200, 'variable', true),
    new Expense('Cachorro', 400, 'variable', true),
  ];


const MonthlyTypes: IDropDownSelectableItemProps[] = [ {title:'Fixed', isSelected: false, onPress : () => {}} , {title:'Variable', isSelected: false, onPress : () => {}}]



const timeoutIdRef = useRef<NodeJS.Timeout | null>(null);
const expenseList = useRef(expensesMockTest)

const [expenseListToRender, setExpenseListToRender] = useState(expenseList.current)

const handleWithRangeSliderFilter = (value: number) => {
  console.log('External called');

  if(!expenseLoadingIsVisible){
    setExpenseLoadingIsVisible(true)
  }
 


  if (timeoutIdRef.current) {
    clearTimeout(timeoutIdRef.current);
    timeoutIdRef.current = null;
  }

  timeoutIdRef.current = setTimeout(() => {
    console.log("Este é um pequeno atraso de 2 segundos.");
    console.log(value);


    //TODO: Fazer função para atualizar a lista dos componentes filtrados pelo valor

    const expenseListFiltered = expenseList.current.filter( item => item.value < value)

    setExpenseLoadingIsVisible(false)

    setExpenseListToRender(expenseListFiltered)


    timeoutIdRef.current = null;
  }, 2000);
};

useEffect(() => {
  return () => {
    if (timeoutIdRef.current) {
      clearTimeout(timeoutIdRef.current);
    }
  };
}, []);



  const handleWithExpenseTypeSelected = (itemsSelected: IDropDownSelectableItemProps[]) => {
      console.log(itemsSelected)
  }

  return (
    <SafeAreaView>
      <MainContainer>
        <TotalExpensesTitle>Total Expenses</TotalExpensesTitle>
        <TotalExpensesText>R$ 5.000,00</TotalExpensesText>
        <ExpenseTypeDropDownListContainer>
          <DropDownList  
          title='Expense Type'
          isSingleSelection={true}
          listItems={MonthlyTypes}
          onItemIsSelected={ itemsSelected => {
            handleWithExpenseTypeSelected(itemsSelected)
          }}
          />
        </ExpenseTypeDropDownListContainer>
        <SearchContainer>
          <DefaultSearch/>
          <DefaultRangeFilterButton onPress={handleWithRangeFilterButtonPress} />
        </SearchContainer>
        {rangeFilterIsVisible &&
                <RangeSliderContainer>
                <RangeSlider onValueChange={ value => handleWithRangeSliderFilter(value)}/>
              </RangeSliderContainer>        
      }  
        <ExpenseListContainer>
            <ExpenseTitleContainer>
                <ExpenseTitle>Your Expenses</ExpenseTitle>
            </ExpenseTitleContainer>

        {expenseLoadingIsVisible ? (
               <ExpenseListLoadingContainer>
               <Progress.CircleSnail color={['#1880A9', '#a3e5ff']} size={50} direction='clockwise'/>
            </ExpenseListLoadingContainer>
        ) : (
          <FlatList style={{ paddingTop: 5}}
          data={expenseListToRender}
          numColumns={2}
          renderItem={({item, index}) => (
            <ExpenseListItem
              name={item.name}
              value={item.value}
              type={item.type}
              isPaid={item.isPaid}
              hasMarginLeft={ index % 2 === 1 ? true : false}
            />
          )}
          showsVerticalScrollIndicator={false}
        />
        )

        }
 
      
        </ExpenseListContainer>
      </MainContainer>
    </SafeAreaView>
  );
};

export default MonthlyExpensesScreen;
