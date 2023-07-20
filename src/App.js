import { connect } from 'react-redux';
import './App.css';
import { actionCreator } from './redux/actions/index'

const mapStateToProps = (state) => ({
  countState: state.count,
})

function App(props) {
  const { countState, dispatch } = props;
  console.log(props);
  return (
    <div className='app'>
      <h1>Contador com React Redux</h1>
      <h2>{countState}</h2>
      <button onClick={() => dispatch(actionCreator())}>incrementar 1</button>
      <button onClick={() => dispatch(actionCreator(5))}>incrementar 5</button>
    </div>
  );
}


export default connect(mapStateToProps)(App);
