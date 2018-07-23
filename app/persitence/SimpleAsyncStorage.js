
import { AsyncStorage } from "react-native";

const SimpleAsyncStorage = {
  


async  storeData(key, item){
    try {
        var jsonOfItem = await AsyncStorage.setItem(key, JSON.stringify(item));
        return jsonOfItem;
    } catch (error) {
      console.log(error.message);
    }
  },
  async  updateData(key, item){
    try {
        var jsonOfItem = await AsyncStorage.mergeItem(key, JSON.stringify(item));
        return jsonOfItem;
    } catch (error) {
      console.log(error.message);
    }
  },
async retrieveData(key) {
    try {
      const retrievedItem =  await AsyncStorage.getItem(key);
      const item = JSON.parse(retrievedItem);
      return item;
    } catch (error) {
      console.log(error.message);
    }
  },
  async deleteData(key) {
    try {
    await AsyncStorage.removeItem(key);
    } catch (error) {
      console.log(error.message);
    }
  },
  async retrieveAllData() {
    try {
      const retrievedKeys=  await AsyncStorage.getAllKeys();
      const retrievedItems=  AsyncStorage.multiGet(retrievedKeys);
      return retrievedItems;
    } catch (error) {
      console.log(error.message);
    }
  }
};
export default SimpleAsyncStorage;