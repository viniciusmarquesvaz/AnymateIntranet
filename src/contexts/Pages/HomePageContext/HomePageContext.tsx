
import  { createContext } from 'react';
import React, {ReactNode} from 'react';


export const ProjectContext = createContext({});

interface Props {
    children?: ReactNode
    // any props that come into the component
}


export const HomePageProvider = ({ children }: Props) => {

	interface HomePageContextInterface {
		name: string;
		author: string;
		url: string;
	  }
    const sampleAppContext: HomePageContextInterface = {
		name: "Using React Context in a Typescript App",
		author: "thehappybug",
		url: "http://www.example.com",
	  };

	return (
		<ProjectContext.Provider value={{ sampleAppContext}}>
			{children}
		</ProjectContext.Provider>
	);
};


