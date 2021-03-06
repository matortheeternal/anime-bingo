import { app } from "hyperapp";
import { AniListSearch } from "./search";
import { State, initialState } from "./state";
import { actions } from "./actions";
import { view } from "./views/main";
import "./styles/styles.css";

const state =
  (module.hot && module.hot.data && module.hot.data.state) || initialState;

const application = app(
  state,
  actions(new AniListSearch()),
  view,
  document.body
);

application.selections.loadState();
application.bingo.loadState();
console.log("https://github.com/walfie/anime-bingo");

(window as any).application = application;

if (module.hot) {
  module.hot.dispose(() => {
    module.hot.data.state = application.getState();
  });
}
