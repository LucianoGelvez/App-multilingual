

import Grid from './Grid';
import { FormattedMessage } from 'react-intl';

const Profile = () => {
	return (
		<div>

			<div className="main">
				<h1 className="titulo"> <FormattedMessage id='profile.tittle' defaultMessage="Profile" /></h1>
				<Grid />
			</div>
		</div>
	);
}

export default Profile