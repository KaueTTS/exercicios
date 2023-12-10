const alunos = ['João', 'Mariana', 'Ana,', 'Pablo']
const medias = [10, 8, 7.5, 9]

const listaAlunosEMedias = [alunos, medias]

function exibeNomeENota(aluno) {
    if (listaAlunosEMedias[0].includes(aluno)) {
        // const alunos = listaAlunosEMedias[0]
        // const medias = listaAlunosEMedias[1]
        const [alunos, medias] = listaAlunosEMedias

        const indice = alunos.indexOf(aluno)
        const mediaAluno = medias[indice]

        console.log(`${aluno} tem a média ${mediaAluno}`)
    } else {
        console.log(`${aluno} não foi encontrado no sistema`)
    }
}

exibeNomeENota('Mariana')
exibeNomeENota('Kauê')