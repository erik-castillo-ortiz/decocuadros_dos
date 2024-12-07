// import React from 'react';
// import Link from 'next/link';

// const HeaderUserAccount: React.FC = () => (
//   <Link href={'login.html'} className="d-lg-block d-none">
//     <div className="header-user">
//       <i className="icon-user-2" />
//       <div className="header-userinfo">
//         <span>Welcome</span>
//         <h4 className="mb-0">My Account</h4>
//       </div>
//     </div>
//   </Link>
// );

// export default HeaderUserAccount;
import React from 'react';
import Link from 'next/link';
import { useUser } from '@/context/UserContext';

const HeaderUserAccount = () => {
  const { user } = useUser();
  const getFirstWord = (name: string) => name.split(' ')[0];

  return (
    <Link
      href={user ? '/dashboard' : '/auth/login'}
      className="d-lg-block d-none"
    >
      <div className="header-user">
        <i className="icon-user-2" />
        <div className="header-userinfo">
          <span>Welcome</span>
          <h4 className="mb-0">
            {user ? getFirstWord(user.first_name) : 'My Account'}
          </h4>
        </div>
      </div>
    </Link>
  );
};

export default HeaderUserAccount;
