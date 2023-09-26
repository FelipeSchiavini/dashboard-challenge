interface LoadingProps {
  size?: 'sm' | 'md' | 'lg' 
}
export const DotsLoading: React.FC<LoadingProps> = () => {
  return (
    <div className="w-full h-full flex justify-center display-block">
      <span className="loading loading-dots loading-lg"></span>
    </div>
  )
}