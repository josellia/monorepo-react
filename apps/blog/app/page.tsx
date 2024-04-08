
import styles from "./page.module.css";
import { Button } from "@financekids/ui";
import './globals.scss';

export default function Home() {
  return (
    <main >
      <Button 
      label="Aqui vou eu" 
      variant="primary" 
      size="small">
        Clique aqui
      </Button>
      <p>Teste</p>

    </main>
  );
}
