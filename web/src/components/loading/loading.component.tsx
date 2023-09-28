interface LoadingProps {
  size?: 'sm' | 'md' | 'lg' 
}
export const DotsLoading: React.FC<LoadingProps> = () => {
  return (
    <div className="w-full h-full flex justify-center display-block" role="status" aria-live="polite" aria-label="dots-loading"> 
      <span className="loading loading-dots loading-lg"></span>
    </div>
  )
}