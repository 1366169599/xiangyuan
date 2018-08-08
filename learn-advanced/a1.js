function test_prime(a)
{
    if(a==1)
    {
        return false;
    }else if(a==2)
    {
        return true;
    }
    else
    {
        for( var x=2;x<a;x++)
        {
            if(a%x==0)
            {
                return false;
            }else{
                return true;
            }
        }
    }
}
console.log(test_prime(37))