import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import { CATEGORIES } from '../data/dummy-data';

const CategoryMealsScreen = props => {

    const categoryId = props.navigation.getParam('categoryId');
    const selectedCategory = CATEGORIES.find(c => c.id === categoryId);
    return (
        <View style={styles.screen}>
            <Text>Category meals Screen</Text>
            <Text>{selectedCategory.title}</Text>
            <Button title="Meal Detail" onPress={() => {
                props.navigation.navigate({ routeName: 'MealDetail' })
            }} />
        </View>
    );
}

CategoryMealsScreen.navigationOptions = navigationData => {
    const catId = navigationData.navigation.getParam('categoryId');
    const selectedCategory = CATEGORIES.find(c => c.id === catId);

    return {
        headerTitle: selectedCategory.title
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default CategoryMealsScreen;