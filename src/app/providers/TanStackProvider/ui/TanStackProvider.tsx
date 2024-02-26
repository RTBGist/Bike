import {QueryClientProvider} from '@tanstack/react-query';
import {queryClient} from '../config/store';

interface TanStackProviderProps {
	children?: React.ReactNode,
}


export const TanStackProvider = (props: TanStackProviderProps) => {
	const { children } = props;

	return (
			<QueryClientProvider client={queryClient}>
				{children}
			</QueryClientProvider>
	)
}
