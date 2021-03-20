import Model from '../models/model';

const loginModel = new Model('users');

export const loginPage = async (req, res) => {
  const { email, password, token } = req.body;
  let user = 'This user is not in database :)';
  try {
    const data = await loginModel.select('id, email, password, role, name', `WHERE email='${email}' AND password='${password}'`);
    if (data.rows[0]?.id) {
      user = data.rows[0];
      const uniqueIdentity = user.id + user.name + user.email + new Date();
      const newToken = await loginModel.updateWithReturn('token', hashCode(uniqueIdentity), user.id);
      user.token = newToken.rows[0].token;
    }
    res.status(200).json({ user: user });
  } catch (err) {
    res.status(200).json({ user: err.stack });
  }
};

export const loginValidateToken = async (req, res) => {
  const { token } = req.params;
  let user = 'This user is not in database :)';
  try {
    const user = await loginModel.select('*', `WHERE token='${token}'`);
    if (user.rows[0]?.id) {
      res.status(200).json({ user: user.rows[0] });
    }
    res.status(200).json({ user: user.rows });
  } catch (err) {
    res.status(200).json({ user: err.stack });
  }
}

const hashCode = s => s.split('').reduce((a,b)=>{a=((a<<5)-a)+b.charCodeAt(0);return a&a},0)