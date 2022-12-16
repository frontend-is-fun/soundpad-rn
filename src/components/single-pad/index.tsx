import * as React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import Sound, {MAIN_BUNDLE} from 'react-native-sound';

import styles from './index.module.scss';
import {PadBlockProps} from '../../types';

type PropsType = {
  info: PadBlockProps;
};

export default function (props: PropsType) {
  const {info} = props;

  const playSound = () => {
    console.log(info.sound);
    // todo
    // 如果是本地音乐第二个参数可能是
    // const sound = new Sound(info.sound, MAIN_BUNDLE, error => {
    // 具体的以后再测试
    //
    const sound = new Sound(info.sound, '', error => {
      if (error) {
        console.log('failed to load the sound', error);
        return;
      }
      // loaded successfully
      console.log(
        'duration in seconds: ' +
          sound.getDuration() +
          'number of channels: ' +
          sound.getNumberOfChannels(),
      );
      // Play the sound with an onEnd callback
      sound.play(success => {
        if (success) {
          console.log('successfully finished playing');
        } else {
          console.log('playback failed due to audio decoding errors');
        }
      });
    });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          console.log('vvvsss');
          playSound();
        }}>
        <View style={styles.padC}>
          <View style={styles.textWrapper}>
            <Text
              style={{
                fontSize: 64,
              }}>
              {info.emoji}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}
