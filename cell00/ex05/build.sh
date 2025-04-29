fname=$@
if [ -z $fname ]; then
	echo "No argument supplied"
	exit
fi

for i in $fname; 
do mkdir "ex"$i
done

