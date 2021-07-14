pandoc -o "$1.pdf" Kapitel/*.md --from markdown --template "/home/dominik/.pandoc/templates/eisvogel.tex" --listings --toc --pdf-engine=xelatex
