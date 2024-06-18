import { CameraView, useCameraPermissions } from 'expo-camera';
import { useState, useRef } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View, Image, Alert } from 'react-native';
import * as MediaLibrary from "expo-media-library";

const CameraViewPhoto = () => {
  const [hasCameraPermission, setHasCameraPermission] = useCameraPermissions();
  const [facing, setFacing] = useState('back');
  const cameraRef = useRef(null);
  const [photo, setPhoto] = useState(null);

  if (!hasCameraPermission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!hasCameraPermission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
        <Button onPress={setHasCameraPermission} title="Grant Camera permission" />
      </View>
    );
  }

  async function takePhoto() {
    if (cameraRef.current) {
      const options = { quality: 0.5, base64: true };
      const photoData = await cameraRef.current.takePictureAsync(options);
      setPhoto(photoData.uri);
      savePhoto(photoData.uri);
    }
  }

  async function savePhoto(uri: string) {
    try {
      const { status } = await MediaLibrary.requestPermissionsAsync();

      if (status === "granted") {
        await MediaLibrary.saveToLibraryAsync(uri);        
        Alert.alert("Foto guardada"," La foto se guardó exitosamente");
      }
    } catch (error) {
      Alert.alert("Error", "Ocurrió un error al guardar la foto ${error}");
    }
  }  

  return (
    <View style={styles.container}>
      <CameraView style={styles.camera} ref={cameraRef} facing={facing}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={takePhoto}>
            <Text style={styles.text}>Take photo</Text>
          </TouchableOpacity>
        </View>
      </CameraView>
      {photo && <Image source={{ uri: photo }} style={{ flex: 1 }} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default CameraViewPhoto;