import { useState, useEffect } from "react";
import "./style.css";
const ConsultaCatalogo = () => {
  const [produtos, setProdutos] = useState([]); //useState cria uma variavel para armazer o vetor
  const [erro, setErro] = useState([]);
  useEffect(() => {
    //useEffect para criar de forma asyncrona para não tem problema no banco tanto que pede para esperar
    const consulta = async () => {
      try {
        const resposta = await fetch("http://localhost:8080/api/v1/produtos");
        const dados = await resposta.json();
        setProdutos(dados);
      } catch (error) {
        setErro(error);
        console.log(error);
      }
    };
    consulta(); // roda a função
  }, []); //passa a variavel dependente a execução
  return (
    <div className="Catalogo">
      <h3>ConsultaCatalogo</h3>
      {JSON.stringify(produtos)}
    </div> //stringfy troca a variavel para string visualização
  );
};
export default ConsultaCatalogo;
