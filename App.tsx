import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import { NativeWindStyleSheet } from 'nativewind';
import Graficas from './components/Graficas';
import Boleta from './components/Boleta';
import CameraViewPhoto from './components/Camera';
import CameraViewVideo from './components/Video';
import Terminos from './components/Terminos';
import Navbar from './components/Navbar';

NativeWindStyleSheet.setOutput({
  default: 'native',
});

export default function App() {
  return (
    <ScrollView className="w-full bg-white px-6 py-24 sm:py-32 lg:px-8">

      
      <Boleta />
      <Text>{"\n"}</Text>
      <Text>{"\n"}</Text>

      <Text>{"\n"}</Text>

      <Text>{"\n"}</Text>



      
      <Text>{"\n"}</Text>

      <Terminos></Terminos>


    </ScrollView>
  );
}
