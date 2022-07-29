import React from "react";
import useJsonFetch from "../hook/useJsonFetch";

export default function Data() {
  const [data, loading, error] = useJsonFetch("http://localhost:7070/data");
    return (
    <>
      <div>
        <h1>Компонент дата Data</h1>
        <div>Успешное получегие данных : {data.status}</div>
        <div>Загрузка : {loading ? "загрузка" : "загрузка завершенна"}</div>
        <div>Ошибки : {error === null ? "ошибок нет" : { error }}</div>
      </div>
    </>
  );
}
