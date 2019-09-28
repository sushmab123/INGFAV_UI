import React from 'react';
import {shallow,mount} from 'enzyme';
import FavouriteAccount from '../favoriteAcc/favoriteAcc';

describe('When Controlled component is given', () => {
    let wrapper;
        beforeEach(() => {
            wrapper = mount(<FavouriteAccount/>);
  });

    it('should render', () => {
        expect(wrapper).toHaveLength(1);
    });
    if('should render table element',()=>{
      expect(wrapper.find('card')).toHaveLength(1);
    });
    it('should render button element',()=>{
        expect(wrapper.find('#btn3')).toHaveLength(0);
    });
   
    it('should render h1 tag',()=>{
        expect(wrapper.find('h5')).toHaveLength(1);
    })

   
      describe('When first button is cliked', () => {
        it('should have called cancel function', () => {
          const comp = shallow(<FavouriteAccount/>);
          const spy = jest.spyOn(comp.instance(), 'handleAddFavourite');
          comp.instance().forceUpdate();
          comp.find('#btn3').simulate('click');
          expect(spy).toHaveBeenCalled();
        });
      });
     
      describe('when account summary is ',()=>{
        const listFavourites=[
          {
            accountName:"Narasimha",
            accountNumber:ES1234,
            bankName:"spain"
          },
          {
            accountName:"divya",
            accountNumber:ES1234,
            bankName:"spain"
          },
          {
            accountName:"divya",
            accountNumber:ES1234,
            bankName:"spain"
          }
        ]
        beforeEach(()=>{
          wrapper=shallow(<FavouriteAccount listFavourites={listFavourites} />)
        });
        it('should renderlist of accounts for a user',()=>{
          const table=wrapper.find('table');
          const tbody=table.find('tbody');
          const tr=tbody.find('tr');
          expect(tr.length=3).toBe(3);
        });
      });
      describe('when the account summary is empty',()=>{
       const emptyArray=[];
       beforeEach(()=>{
         wrapper=shallow(<FavouriteAccount listFavourites={emptyArray}/>);
       });
       it('should not display account row data',()=>{
         const table=wrapper.find('table');
         const tbody=table.find('tbody');
         const tr= tbody.find('tr');
         expect(tr.length).toBe(0)
       });

      });


 
});
