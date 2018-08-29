import React from 'react';
import { LeftColumn } from '../components/LeftColumn';
import { Avatar } from '../components/Avatar';
import { DownloadButton } from '../components/Button';
import avatarUrl from '../assets/img/cvAvatar.jpeg';
import { Contacts } from './Contacts';
import { FullName, MainPosition } from '../components/Heading';

export class Aside extends React.Component {
  render() {
    return (
      <LeftColumn>
        <Avatar src={avatarUrl} />
        <FullName>Вячеслав Минин</FullName>
        <MainPosition>Frontend разработчик</MainPosition>

        <Contacts />

        <DownloadButton>Скачать PDF</DownloadButton>
      </LeftColumn>
    );
  }
}