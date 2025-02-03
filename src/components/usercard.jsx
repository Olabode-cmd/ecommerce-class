import Bg from '../assets/images/auth-bg.jpg';

const UserCard = (props) => {
    
    return (
      <>
        <div className="flex flex-col">
          <div className="img-div h-[300px] w-full object-cover rounded-lg overflow-hidden">
            <img
              // src={Bg}
              src={props.image}
              className="w-full h-full object-cover"
              alt="Image"
            />
          </div>

          <div className="text-div mt-3">
            <h3 className="text-lg font-semibold">{props.name}</h3>
            <p className="text-md">{props.title}</p>

            <p className="text-md mt-2">{props.description}</p>
          </div>
        </div>
      </>
    );
}

export default UserCard;