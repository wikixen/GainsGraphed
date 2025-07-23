import { COLORS } from '@/constants/colors';
import React, { ReactNode } from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

interface Props {
  children: ReactNode;
}

const ListBtn = ({ children }: Props) => (
  <Pressable style={styles.btn}>
    <Text style={styles.text}>{children}</Text>
  </Pressable>
)

export default ListBtn

const styles = StyleSheet.create({
  btn: {
    backgroundColor: COLORS.primary,
    marginInline: 15,
    padding: 10,
    borderRadius: 5
  },
  text: {
    color: COLORS.primaryForeground,
    fontSize: 20
  }
})