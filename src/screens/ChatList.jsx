import { View, Text,StyleSheet, TextInput, Image, FlatList,TouchableOpacity } from 'react-native'
import React from 'react'
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import ChatData from '../data/CartData';
import { useNavigation } from '@react-navigation/native';


const statusBarHeight = getStatusBarHeight();

const ChatListHeader = () => {
    return (
        <View style={styles.searchBarView}>
        <View style={styles.searchBar}>
            <Feather name="search" size={24} color="#EB5CF8" />
            <TextInput placeholder='Search' style={styles.searchBarText} />
        </View>
    </View>
    )
}
const ChatList = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
       
        <FlatList 
            data={ChatData}
            ListHeaderComponent={ChatListHeader}
            keyExtractor={item=>item.id.toString()}
            showsVerticalScrollIndicator={false}
            renderItem={({item})=>(
                <TouchableOpacity
                onPress={()=>navigation.navigate('Convo',{itemId:item.id})} 
                style={{marginBottom:25}}>
                     <View style={styles.userDetails}>
                    <View style={{flexDirection:'row',alignItems:'flex-start'}}>
                        <View>
                            <Image source={item.image} style={{width:34,height:34,borderRadius:100}} />
                            <View  style={[styles.isActive,{backgroundColor:item.isActive ? '#36F855' : 'red'}]}/>
                        </View>
                        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',flex:1}}>
                        <View style={{marginLeft:12}}>
                            <Text style={styles.useNmae}>{item.userName}</Text>
                                <View style={[styles.detailsView]}>
                                    <Text style={[styles.detailsText,{marginRight:10,marginLeft:0}]}>{item.lastMessage}</Text>  
                                </View>
                        </View>
                        <View>
                        <View style={{alignItems:'flex-end'}}>
                                <Text style={[styles.detailsText,{marginRight:0,marginLeft:0}]}>{item.time}</Text>
                                <View style={{flexDirection:'row',alignItems:'center'}}>
                                    {item.isDelivered && !item.isRead && item.isSent && <MaterialCommunityIcons name="check-all" size={16} color="#BCBCBC" />}
                                    {item.isRead  && <MaterialCommunityIcons name="check-all" size={16} color="#E10BF4" />}
                                    {item.messageCount > 0 && <View style={{backgroundColor:'#F9C32F',width:16,height:16,borderRadius:100,alignItems:'center',justifyContent:'center',marginLeft:5}}>
                                        <Text style={{color:'#fff',fontSize:10,fontFamily:'EuclidSemiBold'}}>{item.messageCount}</Text>
                                    </View>}
                                    {!item.isRead && !item.isDelivered &&item.isSent  && <MaterialCommunityIcons name="check" size={16} color="#BCBCBC" />}
                                    
                                </View>
                        </View>
                            </View>
                        </View>
                    </View>
                    
                    
                </View>
                </TouchableOpacity>
            )}
        />
    </View>
  )
}

export default ChatList

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: statusBarHeight,
        paddingHorizontal: 20,
        backgroundColor: '#fff',
        
    },
    searchBarView: {
        marginTop: 20,
        marginBottom: 16,
    },
    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor:'#E0E0E0',
        borderWidth:1,
        padding: 10,
        borderRadius: 6,
    },
    searchBarText: {
        flex:1,
        padding:2,
        marginRight: 10,
        color:'#BCBCBC',
        fontFamily:'EuclidRegular',
        fontSize:12,
        marginLeft: 8,
    },
    isActive:{
        width:12,
        height:12,
        backgroundColor:'#36F855',
        borderRadius:100,
        borderWidth:2,
        flex:1,
        alignSelf:'flex-end',
        bottom:13,
        left:3,
        borderColor:'#fff'
    },
    userDetails:{
       
    },
    detailsView:{
        flexDirection:'row',
        alignItems:'center',
        marginTop:0

    },
    detailsText:{
        fontFamily:'EuclidRegular',
        fontSize:12,
        color:'#6E6E6E',
        marginHorizontal:8
    },
    useNmae:{
        fontFamily:'EuclidSemiBold',
        fontSize:14,
        color:'#272727'

    },
})