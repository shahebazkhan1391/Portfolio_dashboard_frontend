// This is a reusable component that accepts "props" (properties)
function ProfileCard(props) {
    return (
      <div className="profile-card">
        <img src={props.avatar} alt={props.name} className="avatar" />
        <h2>{props.name}</h2>
        <p className="title">{props.role}</p>
        <p className="bio">{props.bio}</p>
      </div>
    )
  }
  
  export default ProfileCard