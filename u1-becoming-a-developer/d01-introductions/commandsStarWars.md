mkdir star_wars
mkdir star_wars/empire star_wars/rebellion
touch star_wars/empire/darth_vader.txt
echo "..heavy breathing..." >> star_wars/empire/darth_vader.txt
touch star_wars/empire/emperor_palpatine.txt
mkdir star_wars/empire/death_star
mv star_wars/empire/darth_vader.txt star_wars/empire/death_star/
cd star_wars/rebellion/
touch princess_leia.txt
echo "Help me, Obi-Wan. ..You're my only hope." >> princess_leia.txt 
touch obi_wan.txt luke_skywalker.txt
mkdir millenium_falcon
touch millenium_falcon/han_solo.txt millenium_falcon/chewy.txt
mv ./*.txt millenium_falcon/
cd ~
mv star_wars/rebellion/millenium_falcon/ star_wars/empire/death_star/
mv star_wars/empire/death_star/millenium_falcon/* star_wars/empire/death_star/
rm star_wars/empire/death_star/obi_wan.txt 
mv star_wars/empire/death_star/* star_wars/empire/death_star/millenium_falcon/
mv star_wars/empire/death_star/millenium_falcon/darth_vader.txt star_wars/empire/death_star/
mv star_wars/empire/death_star/millenium_falcon/ star_wars/rebellion/
mv star_wars/empire/death_star/darth_vader.txt star_wars/empire/
rm -r star_wars/empire/death_star/
