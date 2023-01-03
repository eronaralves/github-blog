import { Routes as RoutesDom, Route } from "react-router-dom";

// Components
import { Home } from "./screens/Home";
import { Post } from "./screens/Post";
import { DefaultLayout } from "./layouts/DefaultLayout";

export function Routes() {
  return (
    <RoutesDom>
      <Route path="/" element={<DefaultLayout/>}>
        <Route path="/" element={<Home/>}/>
        <Route path="/post" element={<Post/>}/>
      </Route>
    </RoutesDom>
  )
}