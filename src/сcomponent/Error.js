import React from "react";
import useJsonFetch from "../hook/useJsonFetch";

export default function Error() {
  const [data, loading, error] = useJsonFetch("http://localhost:7070/error");
  return (
    <>
      <div>
        <h1>Компонент дата Error</h1>
        <div>Успешное получегие данных : {data.status === '' || 'данных нет'}</div>
        <div>Загрузка : {loading ? "загрузка" : "загрузка завершенна"}</div>
        <div>Ошибки : {error === null ? "ошибок нет" : error}</div>
      </div>
    </>
  );
}
