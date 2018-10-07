let component = ReasonReact.statelessComponent("App");

let make = _children => {
  ...component,
  render: self => 
  <div>
    {"Hello World" |> ReasonReact.string}
  </div>

}