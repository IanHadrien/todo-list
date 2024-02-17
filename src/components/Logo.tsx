import LogoTodoList from '../assets/Icons/rocket.svg';

export function Logo() {
  return (
    <div className="flex items-center justify-center text-ignite-gary100 h-full">
      <img 
        src={LogoTodoList} 
        alt="logotype" 
      />
      <p className='px-3 text-ignite-blue text-text40 font-black'>
        to
        <span className='text-ignite-purpleDark'>do</span>
      </p>
    </div>
  )
}