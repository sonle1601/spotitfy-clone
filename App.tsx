import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import { RootSiblingParent } from 'react-native-root-siblings';
import { Provider } from 'react-redux';
import { store } from './redux-store/store';




export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <Provider store={store}>
      <RootSiblingParent>
        <SafeAreaProvider>
            <Navigation colorScheme={colorScheme} />
            <StatusBar />

        </SafeAreaProvider>
      </RootSiblingParent>
      </Provider>
    );
  }
}
