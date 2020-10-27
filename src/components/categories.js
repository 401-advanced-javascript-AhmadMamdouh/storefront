import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { changeActiveCategory } from '../store/categories';
import {getCategories} from '../store/api';
import {AppBar, Tabs, Tab} from '@material-ui/core';

function Categories(props) {
    useEffect(()=>{
        props.getCat();
    },[]);
    return (
        
        <section>
            <AppBar position="static">
                <Tabs >
                {
                    props.categories.categories.map((category) => {
                        return (
                            <Tab label={category.displayName} key={category.name} onClick={() => props.changeActiveCategory(category.name)}>
                                {category.displayName}
                            </Tab>
                        );
                    })
                }
                </Tabs>
            </AppBar>
        </section>
    );
}

const mapStateToProps = (state) => {
    return { categories: state.categories };
}

const mapDispatchToProps = (dispatch)=>({
    change: (catName)=> dispatch(changeActiveCategory(catName)),
    getCat: ()=> dispatch(getCategories()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Categories)