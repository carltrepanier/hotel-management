import { component1, component2 } from './ServerComponent';

import ClientComponent from './ClientComponent';

export default function Hero() {
	return <ClientComponent component1={component1} component2={component2} />;
}
