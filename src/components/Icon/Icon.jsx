const SocialIcon = ({ iconName, path, textcolor, type = "fa" }) => {
  return (
    <div className="flex">
      <a href={path}>
        <i
          style={{
            fontSize: "5rem",
          }}
          className={`${type} ${iconName} hover:text-dracula-primary bg-white rounded-lg p-3 w-28 h-28 flex justify-center items-center`}
        ></i>
      </a>
    </div>
  );
};

const NothingIcon = () => {
  return (
    <div className="flex">
      <i
        style={{
          fontSize: "5rem",
        }}
        className={`fa fa-meh-o bg-white hover:text-dracula-primary rounded-lg p-3 w-28 h-28 flex justify-center items-center`}
      ></i>
    </div>
  );
};

export { SocialIcon, NothingIcon };
