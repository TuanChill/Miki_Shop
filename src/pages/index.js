import Head from 'next/head';
import Image from 'next/image';
import {Button} from "../components/Button";
import Header from "../layouts/header/Header.js";
//always import from src folder, not "./", "../", "../../",...
export default function Home() {
  return (
      <>
          <Header />
      </>
  );
}  
import Button from 'src/components/Button';
//always import from src folder, not "./", "../", "../../",...
export default function Home() {
  return <Button secondary>Tìm hiểu thêm</Button>;
}
