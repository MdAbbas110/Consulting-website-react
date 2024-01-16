const ListItem = ({ icon, text }) => {
  return (
    <div className="flex items-center gap-2">
      {icon}
      <li>{text}</li>
    </div>
  );
};

export default ListItem;
