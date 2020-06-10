import React, {Component} from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  Image,
  TouchableOpacity
 } from 'react-native';

class App extends Component{

  constructor(props){
    super(props);
    this.state ={
      txtFrase:'Descobrir',
      img:require('./src/FB_IMG_1589889123108.jpg'),

    };

    this.descobrir = this.descobrir.bind(this);

    this.frases = [ "Há mais de um século, os cadernos de Marie Curie continuam radioativos",
                    "As pegadas dos astronautas ainda estão na Lua",
                    "O papagaio de Winston Churchill continua xingando Hitler",
                    "Não foram escravos que construíram as pirâmides do Egito",
                    "Antes do despertador, existiam despertadores humanos",
                    "A maior árvore do Brasil foi descoberta em 2019",
                    "O maior prédio do futuro terá 1 km"

    ];
  }
  descobrir(){
    let numeroAleatorio= Math.floor(Math.random()* this.frases.length);
    
    this.setState({
      txtFrase:'"'+this.frases[numeroAleatorio]+'"',
      //img:require('./src/sabia.png')
    })
    
  
  }
  render(){
    return(
      <View style={styles.container}>

        <Image 
        style={styles.imagem}
        source={this.state.img}
        />

        <Text style={styles.txt}>{this.state.txtFrase}</Text>

        <TouchableOpacity style={styles.btn}onPress={this.descobrir}>
          <View style={styles.btnArea}>
            <Text style={styles.txtBreak}>Descobrir</Text>
          </View>
        </TouchableOpacity>
      </View>
    )  
  }
  
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    justifyContent:'center'
  },
  imagem:{
    width:250,
    height:250

  },
  txt:{
    fontSize:20,
    color:'#dd7b22',
    margin:30,
    fontStyle:'italic',
    textAlign:'center'


  },
  txtBreak:{
    fontSize:18,
    fontWeight:'bold',
    color:'#dd7b22'
  },
  btn:{
    width:230,
    height:50,
    borderWidth:1,
    borderColor:'#dd7b22',
    borderRadius:15
  },
  btnArea:{
    flex:1,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'

  }
});
