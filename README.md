# Agenda Telefônica e Mensageiro.

## Criação da API com autenticação

A proposta do projeto é criar uma api que ira catalogar os contatos de uma agenda telefonica,
sendo assim será criado um um banco de dados chamado `mensageiro` com a tabela `usuario`, `contatos` e `mensagem`.

<div>
<img src="https://scontent.fgru19-1.fna.fbcdn.net/v/t1.15752-9/333725950_164142399364510_8828642481630036736_n.png?_nc_cat=108&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeEZrvE7Igl3v7ycwMjEpx4kmn-CHBQrQZyaf4IcFCtBnLFvkriLK7szzMEYGtol13YKBsp3ODNTdu9z9UVUkmp0&_nc_ohc=Pn3CJAZzwgsAX-CiIpm&_nc_ht=scontent.fgru19-1.fna&oh=03_AdRp-i7KJ2IwDkh2iQH4pnFTL2eFQHApBBxI0ZCaCH-7hw&oe=64275B7F"  width="400px" height="400px"/>
</div>

Foi feita uma função para cadastrar um `usuario`, posteriormente logar esse `usuario`, e para que haja uma segurança
maior, a senha foi criptografada e ao logar é gerado um token para poder acessar as demais rotas.

#

### Cadastro do usuario

#

<div>
<img src="https://scontent.fgru19-1.fna.fbcdn.net/v/t1.15752-9/330894186_760392088802182_8109782385925136455_n.png?_nc_cat=105&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeE3EFAVXA7S00Oxtxx9ouJHTz0lR89qLE5PPSVHz2osTpdy1RUjCos62fb1mgOrEKK3axc9XCqb9VIj4hkMac3s&_nc_ohc=WFVNfuCLZvcAX92eToK&_nc_ht=scontent.fgru19-1.fna&oh=03_AdQYuzP5OaD7PLr7_ZIeCJnWSBMPM1m4ARB6iJ_STA58ww&oe=64277ABD"  width="800px" height="350px"/>
</div>

#

### Login do usuario

#

<div>
<img src="https://scontent.fgru19-1.fna.fbcdn.net/v/t1.15752-9/334468228_1707035523044830_5162791055847684815_n.png?_nc_cat=105&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeHW7nKDngzlKmzZxWOUQ1b-IQ6yhpxBtFkhDrKGnEG0WaPD1in1Rh1ZYSqQdoPREiDMQQH1_4DMN1Aeh1IpbS8F&_nc_ohc=8wZ58-xKP_0AX8WTpqr&_nc_ht=scontent.fgru19-1.fna&oh=03_AdQOmYEotuq6yl_te9O6bdxig7e2Z90c5lI537eghpKiBQ&oe=64274F36"  width="900px" height="350px"/>
</div>

#

### Detalhar Usuario

#

<div>
<img src="https://scontent.fgru19-1.fna.fbcdn.net/v/t1.15752-9/334548083_1628284147619051_5128416008808724143_n.png?_nc_cat=110&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeF_2H11II-Vht1IZx50cGweHzab05FyuDIfNpvTkXK4MgG1q-V5RJyOo6wI4w_0MEAR_JdC1nyoyDZn1Fpzrh_q&_nc_ohc=TKOjzbnulQoAX-EJp92&_nc_ht=scontent.fgru19-1.fna&oh=03_AdQzqezF9UOgvFFM2V7KTuQl5dQL5vHh97y_1In4ESEuNw&oe=64276D6D"  width="900px" height="350px"/>
</div>

#

Na rota abaixo podemos alterar os dados do `Usuario`

#

### Atualizar Usuario

#

<div>
<img src="https://scontent.fgru19-1.fna.fbcdn.net/v/t1.15752-9/333857077_922753578850809_7435193620305364254_n.png?_nc_cat=100&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeFIGrQEJBC4Mj1Arvh48JZlRF3B6kc4xnVEXcHqRzjGdW1KxFBeHDapUs_fd5Ei76ZqKcPSNDS0WXat9sh6nX-w&_nc_ohc=RgE_UIuCLBUAX8vsOT-&_nc_ht=scontent.fgru19-1.fna&oh=03_AdTmcTOnJKw3NI22XccW07V73KAEPOC2nqBiSlULtPNa0A&oe=64274FA6"  width="900px" height="350px"/>
</div>

#

Na rota abaixo podemos excluir o `Usuario`

#

### Excluir Usuario logado

#

<div>
<img src="https://scontent.fgru19-1.fna.fbcdn.net/v/t1.15752-9/334633515_3035851360053473_7155486053823604912_n.png?_nc_cat=101&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeFEegpoAtTWrypGCnRNBfngmKjuJQUt9mqYqO4lBS32ajxnwlEdkTVd7EPsWad6e_b80tSrAhi0fBgu6e0WgKU-&_nc_ohc=jceTaIAjc2MAX8qWwjZ&_nc_ht=scontent.fgru19-1.fna&oh=03_AdT9w9elUzuWWu52xR0LybHIrEGlPZ19xpEqLhAXCmPZyA&oe=6427601F"  width="900px" height="350px"/>
</div>

#

Após realizar todas as operações do `usuário`, fiz as operações para os contatos, são elas:
`criar contato`, `listar contatos`, `atualizar contato` e `remover/excluir contato`.

#

### Criar Contato

#

<div>
<img src="https://scontent.fgru19-1.fna.fbcdn.net/v/t1.15752-9/334566546_213724144529179_5267996541240165123_n.png?_nc_cat=104&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeG5V9IVf1ll-dvdl5RjMvEOHAJLqs9Dx0YcAkuqz0PHRr83_4vBNQie_fY5jn-7BXiU7ZeG5i8XgAPP_qSCkN8l&_nc_ohc=kwQLZhqm6tYAX9bOMSX&_nc_ht=scontent.fgru19-1.fna&oh=03_AdQki-ZVoRtqcFG-MaaegyhU2glX_gY27X4QpYWKd2A31Q&oe=642762C9"  width="900px" height="350px"/>
</div>

#

Após cadastrar o `contato` é possível recuperar e detalhar esse contato, para isso é necessário passar o num de telefone na query.

#

### Detalhar Contato

#

<div>
<img src="https://scontent.fgru19-1.fna.fbcdn.net/v/t1.15752-9/334690508_147544458177639_8731712421146519675_n.png?_nc_cat=105&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeGtics8LsYOWM4xEflSf7wTycTV93UXqJvJxNX3dReomzbxgJuHypZz7-AY0YSFE4Ld150LhJ_LSINMV3EKQu4L&_nc_ohc=VZVR9Vse-XQAX_dG0Ov&_nc_ht=scontent.fgru19-1.fna&oh=03_AdSp_kXkkLYSpIbhrQZwQUCyk7k3sZNzm4qCAvLocZL4-g&oe=6427807F"  width="900px" height="400px"/>
</div>

#

Ao acessar a rota `Listar contato` é possível recuperar todos os `contatos` vinculados ao usuario logado

#

### Listar Contatos

#

<div>
<img src="https://scontent.fgru19-1.fna.fbcdn.net/v/t1.15752-9/334602126_244248741286765_7191060440511152829_n.png?_nc_cat=104&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeEOfsXawTWtrM3-pAbXc4smAAnIxErNUNUACcjESs1Q1dJVbfn_-Rnsxn9XjE5t7Sg3awyt3zhXp8_NYfxxMCxx&_nc_ohc=uf1zsfOTxCwAX92Oqtt&_nc_ht=scontent.fgru19-1.fna&oh=03_AdR94EXakZmbVIhLadxc3-TDbcR4VCAfMrNX6_bVPp2ioA&oe=64275A9F"  width="900px" height="400px"/>
</div>

#

Ao acessar a rota `Atualizar contato` é possível atualizar um `contato` vinculados ao usuario logado, para isso é necessário
passar o numero de telefone na query e os dados para atualizar no body json.

#

### Atualizar Contato

#

<div>
<img src="https://scontent.fgru19-1.fna.fbcdn.net/v/t1.15752-9/334282600_194772089863667_9184443408527688961_n.png?_nc_cat=111&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeGBfGCCrMtpzLcAyPzc8QpY0NvdEG-f-onQ290Qb5_6iTMV_6eGT9tg2Qe2KvqZDyGXXlRgtJSHKMJ5qM7c9UBK&_nc_ohc=PPnyix8pflcAX9x4O74&_nc_ht=scontent.fgru19-1.fna&oh=03_AdTknQOc0JEBCiZCf47Y9ci8OPFks-mQH7Y_9AiNI67lDQ&oe=6427659D"  width="900px" height="350px"/>
</div>

#

Ao acessar a rota `Excluir contato` é possível excluir um `contato` vinculados ao usuario logado, para isso é necessário
passar o numero de telefone na query.

#

### Excluir Contato

#

<div>
<img src="https://scontent.fgru19-1.fna.fbcdn.net/v/t1.15752-9/334548529_170607032419552_5199653882858787960_n.png?_nc_cat=110&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeFvUEGQQwpwKRnDyirIu_cO0AjunDAksmjQCO6cMCSyaDKV-zsgLvF1Y-dP29jRFNXjIh8A312n4j7CMHQhX5lB&_nc_ohc=GI0d92P6DxYAX_TmKll&_nc_ht=scontent.fgru19-1.fna&oh=03_AdQ4GswGV5Svo-jytpqUAtX7wbEna96RSJEXKJqHGxGKrg&oe=6427654C"  width="900px" height="350px"/>
</div>

#

Apos criar as funções dos `contatos` decidi criar uma endpoint `enviar mensagem`, `listar mensagens` e `deletar mensagens`,
para isso é necessário estar logado e assim posso enviar uma mensagem para um numero de telefone, sendo ele cadastrado na lista de contatos ou não.

#

### Enviar Mensagem

#

<div>
<img src="https://scontent.fgru19-1.fna.fbcdn.net/v/t1.15752-9/334616601_885133179266262_3116147480260414959_n.png?_nc_cat=111&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeHZTG73UN1NKV1LGkI64j8QRZJ6h-QFfZJFknqH5AV9ku-wB4Kurdm3PMkJ3IMolbE5xxc9Sap0yfaRnOWL6nNd&_nc_ohc=hKg9oAmcBfwAX-JcW-_&_nc_ht=scontent.fgru19-1.fna&oh=03_AdSLWYaHP3OnqxopzDNxVh53iUwpYr_JBFuSKHX6JC8j0w&oe=64275AB3"  width="900px" height="350px"/>
</div>

#

Apos enviar as mensagens, é possivel recuperar todas as mensagens que foram enviadas

#

### Listar Mensagens

#

<div>
<img src="https://scontent.fgru19-1.fna.fbcdn.net/v/t1.15752-9/334296261_729902068629530_88710825166413130_n.png?_nc_cat=111&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeHxnVXJqapjhXkcRFqm-gQ5ofGyrIift-Oh8bKsiJ-342X4TxfTZtPfIyQFWaduDyv4g_1dhWzgMbpbBTCXP2TS&_nc_ohc=Hrw7ugvnowQAX9Ppi_8&_nc_ht=scontent.fgru19-1.fna&oh=03_AdRylpxBkxJWUrXrhHe_vVcxf77vULFlsz84uteGx-_JIg&oe=642771EA"  width="900px" height="350px"/>
</div>

#

#

Para finalizar criei a função escluir uma mensagem por id da mensgem, para isso é necessário passar o id da mensgem na query.

#

### Excluir Mensagem

#

<div>
<img src="https://scontent.fgru19-1.fna.fbcdn.net/v/t1.15752-9/334554705_227404159680982_7563395443461316758_n.png?_nc_cat=106&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeGqEHFwuJ0x8ai8yZuTnYfWhEfAin6y64GER8CKfrLrgTioXJFp9YlNC4GPMYzN3nDNi5qlN87E4WMIBQZ_tfA2&_nc_ohc=OYIgfYr_xzkAX9bd8T3&_nc_ht=scontent.fgru19-1.fna&oh=03_AdTZc9N1eAsENm9l-g4UUGh4n0sJ7R-xKMDWjCh5DmIttQ&oe=64277F93"  width="900px" height="300px"/>
</div>

#
