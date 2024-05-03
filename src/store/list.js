export default {
    namespaced:true,
    state(){
        return{
            listItems:[],
            totalCount:0
        }
    },
    mutations:{
        addListItem(state,payload){
            state.totalCount++;
            payload.id = state.totalCount;
            state.listItems.push(payload);
            state.listItems.sort((a,b)=> {
                return b.date - a.date
            })
        },
        editListItem(state, payload) {
            const itemIndex = state.listItems.findIndex(item => item.id === payload.id);
            if (itemIndex !== -1) {
                const updatedItem = {
                    ...state.listItems[itemIndex],
                    ...payload
                };
                state.listItems.splice(itemIndex, 1, updatedItem);
                // console.log('itemIndex',itemIndex);
            } else {
                console.error("Item not found for id:", payload.id);
            }
        },
        deleteListItem(state,payload){
            const indexToDelete = state.listItems.findIndex(item => item.id === payload.id);
            if(indexToDelete != -1){
                state.listItems.splice(indexToDelete,1)
            }
            console.log(state.listItems);
        }
    },
    actions:{

    },
    getters:{
        orderByDesc(state){
            return [...state.listItems].sort((a,b)=>
                b.date - a.date
            )
        },
        orderByAsc(state){
            return [...state.listItems].sort((a,b)=>
                a.date - b.date
            )
        },
    }
}