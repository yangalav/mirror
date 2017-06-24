
export const redirect = (req, res) => {
  res.send(req.user);
};

export const logout = (req, res) => {
  req.logout();
  return res.json({ success: true });
};
