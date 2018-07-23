
import { AsyncStorage } from "react-native";

const SimpleAsyncStorage = {
  


async  storeData(key, item){
    try {
        var jsonOfItem = await AsyncStorage.setItem(key, JSON.stringify(item));
        return jsonOfItem;
    } catch (error) {
      throw error;
    }
  },
  async  updateData(key, item){
    try {
        var jsonOfItem = await AsyncStorage.mergeItem(key, JSON.stringify(item));
        return jsonOfItem;
    } catch (error) {
      throw error;

    }
  },
async retrieveData(key) {
    try {
      const retrievedItem =  await AsyncStorage.getItem(key);
      const item = JSON.parse(retrievedItem);
      return item;
    } catch (error) {
      throw error;
    }
  },
  async deleteData(key) {
    try {
    await AsyncStorage.removeItem(key);
    } catch (error) {
      throw error;
    }
  },
  async retrieveAllData() {
    try {
      const retrievedKeys=  await AsyncStorage.getAllKeys();
      const retrievedItems=  AsyncStorage.multiGet(retrievedKeys);
      return retrievedItems;
    } catch (error) {
      throw error;
    }
  }
};
export default SimpleAsyncStorage;