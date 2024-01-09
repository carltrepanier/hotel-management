import { heading1, heading2 } from './ServerComponent';

import ClientComponent from './ClientComponent';

export default function Hero() {
	return <ClientComponent heading1={heading1} heading2={heading2} />;
}
