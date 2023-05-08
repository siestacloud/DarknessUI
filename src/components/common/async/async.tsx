import React, { useState, useEffect } from "react";



interface GitHubProps {
  login: string
}

interface GitHubUser {
  name: string
  login: string
  avatar_url: string
  location: string
}


export const GitHubUser = ({ login }: GitHubProps) => {



  // const loadJSON = (key: string): GitHubUser | null => {
  //   let item: string | null = localStorage.getItem(key)
  //   if (!item) {
  //     return null 
  //   };
  //   let itemJSON = JSON.parse(item)
  //   if (key && itemJSON){

  //   }
  // }

  // const saveJSON = (key: string, data: string) =>
  //   localStorage.setItem(key, JSON.stringify(data));



  const [data, setData] = useState();

  useEffect(() => {
    if (!login) return;
    fetch(`https://api.github.com/users/${login}`)
      .then(response => response.json())
      .then(setData)
      .catch(console.error);
  }, [login]);

  if (data) {
    return (
      <div className="async">
        <pre className="async__wrapper" >{JSON.stringify(data, null, 2)}</pre>
      </div>
    )
  }

  return null;

}

//* при первом рендеринге переменная состояния устанавливается при помощи хука useState()
//* Затем, поскольку данные изначально равны null, компонент возвращает null, что заставляет React ничего не отображать. Это не ошибка: мы просто увидим черный экран. 
//* После рендеринга компонента вызывается хук useEffect. Здесь мы делаем за- прос на выборку. Получив ответ, мы получаем и анализируем данные в этом от- вете как JSON. Теперь мы можем передать этот объект JSON в функцию setData, которая заставит компонент отобразиться еще раз, но на этот раз у него будут данные. Хук useEffect не будет вызываться снова, пока не изменится значение login.

