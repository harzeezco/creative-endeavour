const Input = ({ label }: { label: string }) => (
  <div className='input-container'>
    <input required id='input' type='text' />
    <label className='label' htmlFor='input'>{label}</label>
    <div className='underline' />
  </div>
  );

export default Input;
