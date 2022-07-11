import { Suspense } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import './App.css';
import Query from './components/query/Query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
    },
  },
})
// url Link 
// http://api.quotable.io/random

function App() {
  return (
    <div className="App">
      <h1>React App</h1>
      <QueryClientProvider client={queryClient}>
        <Suspense fallback={<h1>Loading....</h1>}>
          <Query />
          <Query />
        </Suspense>
      </QueryClientProvider>
    </div>
  );
}

export default App;
