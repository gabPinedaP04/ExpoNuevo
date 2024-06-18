import { CameraView, useCameraPermissions, useMicrophonePermissions } from 'expo-camera';
import { useState, useRef } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View, Alert } from 'react-native';
import * as MediaLibrary from "expo-media-library";

const CameraViewVideo = () => {
  const [hasCameraPermission, setHasCameraPermission] = useCameraPermissions();
  const [hasMicrophonePermission, setHasMicrophonePermission] = useMicrophonePermissions();
  const [facing, setFacing] = useState('back');
  const cameraRef = useRef(null);
  const [video, setVideo] = useState(null);
  const [isRecording, setIsRecording] = useState(false);
  const [recordingText, setRecordingText] = useState("Record video");

  if (!hasCameraPermission || !hasMicrophonePermission) {
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

  if (!hasMicrophonePermission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>We need your permission to record audio</Text>
        <Button onPress={setHasMicrophonePermission} title="Grant Microphone permission" />
      </View>
    );
  }

  function startOrStopVideo(){
    if (!isRecording){
      takeVideo();
      setRecordingText("Stop recording");
    } else {
      stopVideo();
      setRecordingText("Record video");
    }
  }

  async function takeVideo() {
    if (cameraRef.current) {
      setIsRecording(true);
      // const options = { maxDuration: 5 };
      const videoData = await cameraRef.current.recordAsync();
      setVideo(videoData.uri);
      saveVideo(videoData.uri);
    }
  }

  function stopVideo() {
    if (cameraRef.current) {
      setIsRecording(false);
      cameraRef.current.stopRecording();
    }
  }

  async function saveVideo(uri: string) {
    try {
      const { status } = await MediaLibrary.requestPermissionsAsync();

      if (status === "granted") {
        await MediaLibrary.saveToLibraryAsync(uri);        
        Alert.alert("Video guardado"," El video se guardó exitosamente");
      }
    } catch (error) {
      Alert.alert("Error"," Ocurrió un error al guardar el video ${error}");
    }
  }
  

  return (
    <View style={styles.container}>
      <CameraView style={styles.camera} ref={cameraRef} mode="video" facing={facing}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={startOrStopVideo}>
            <Text style={styles.text}>{recordingText}</Text>
          </TouchableOpacity>
        </View>
      </CameraView>
    </View>
  );
}

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

export default CameraViewVideo;