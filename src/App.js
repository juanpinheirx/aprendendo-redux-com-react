import { connect, useSelector } from 'react-redux';
import './App.css';
import { actionCreator, incrementPlusFive } from './redux/actions/index'

function App(props) {
  const { dispatch } = props;
  const countState = useSelector(state => state.count.value)
  console.log(props);
  return (
    <div className='app'>
      <h1>Contador com React Redux</h1>
      <h2>{countState}</h2>
      <button onClick={() => dispatch(actionCreator())}>incrementar 1</button>
      <button onClick={() => dispatch(incrementPlusFive(5))}>incrementar 5</button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  countState: state.count,
})


export default connect(mapStateToProps)(App);
