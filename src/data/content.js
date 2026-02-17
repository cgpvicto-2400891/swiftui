export const contentData = {
    "setup": {
        title: "Installation et Configuration",
        sections: [
            {
                type: "text",
                content: "Pour commencer à développer avec SwiftUI, vous avez besoin de Xcode, l'environnement de développement intégré (IDE) d'Apple. Il inclut tout ce dont vous avez besoin pour créer des applications pour iOS, macOS, watchOS et tvOS."
            },
            {
                type: "tip",
                title: "Configuration Requise",
                content: "SwiftUI nécessite macOS Catalina (10.15) ou version ultérieure et Xcode 11 ou version ultérieure. Pour profiter des dernières fonctionnalités, assurez-vous d'utiliser la dernière version de macOS et Xcode."
            },
            {
                type: "text",
                content: "Lors de la création d'un nouveau projet dans Xcode, choisissez simplement 'App' sous l'onglet iOS et assurez-vous que les paramètres suivants sont sélectionnés :"
            },
            {
                type: "list",
                items: [
                    "Interface : SwiftUI",
                    "Language : Swift",
                    "Storage : Aucun (pour l'instant)"
                ]
            }
        ]
    },
    "views-modifiers": {
        title: "Vues & Modificateurs",
        sections: [
            {
                type: "text",
                content: "Dans SwiftUI, la 'View' est le bloc de construction de base de votre interface utilisateur. Tout ce que vous voyez à l'écran est une vue, du texte aux images en passant par les boutons et les curseurs."
            },
            {
                type: "code",
                title: "Vue texte de base",
                code: `import SwiftUI

struct ContentView: View {
    var body: some View {
        Text("Bonjour, SwiftUI !")
    }
}`
            },
            {
                type: "heading",
                content: "Les Modificateurs"
            },
            {
                type: "text",
                content: "Les modificateurs sont des méthodes que vous appelez sur une vue pour changer son apparence ou son comportement. Ils renvoient une nouvelle vue avec le changement appliqué."
            },
            {
                type: "code",
                title: "Appliquer des modificateurs",
                code: `Text("Bonjour le monde !")
    .font(.largeTitle)
    .foregroundColor(.blue)
    .padding()
    .background(Color.yellow)
    .cornerRadius(10)`
            },
            {
                type: "note",
                content: "L'ordre est important ! Les modificateurs enveloppent la vue comme les couches d'un oignon. Un padding appliqué après un arrière-plan ajoutera de l'espace *à l'extérieur* de l'arrière-plan."
            }
        ]
    },
    "stacks": {
        title: "VStack, HStack, ZStack",
        sections: [
            {
                type: "text",
                content: "SwiftUI utilise trois conteneurs principaux pour organiser les éléments : les layout stacks (piles de mise en page). Ils sont essentiels pour construire des interfaces complexes."
            },
            {
                type: "heading",
                content: "VStack (Pile Verticale)"
            },
            {
                type: "text",
                content: "Organise ses éléments enfants en une colonne verticale."
            },
            {
                type: "code",
                language: "swift",
                code: `VStack(alignment: .leading, spacing: 10) {
    Text("Titre")
        .font(.headline)
    Text("Sous-titre")
        .font(.subheadline)
}`
            },
            {
                type: "heading",
                content: "HStack (Pile Horizontale)"
            },
            {
                type: "text",
                content: "Organise ses éléments enfants en une rangée horizontale."
            },
            {
                type: "code",
                code: `HStack {
    Image(systemName: "star.fill")
    Text("Favoris")
}`
            },
            {
                type: "heading",
                content: "ZStack (Pile de Profondeur)"
            },
            {
                type: "text",
                content: "Superpose ses éléments enfants les uns sur les autres, très utile pour les arrière-plans."
            },
            {
                type: "code",
                code: `ZStack {
    Color.blue
    Text("Texte au premier plan")
        .foregroundColor(.white)
}`
            }
        ]
    },
    "state": {
        title: "@State & Binding",
        sections: [
            {
                type: "text",
                content: "SwiftUI est déclaratif. Au lieu de mettre à jour manuellement l'interface, vous modifiez l''État' (State), et SwiftUI redessine automatiquement l'interface pour refléter cet état."
            },
            {
                type: "heading",
                content: "@State"
            },
            {
                type: "text",
                content: "Utilisez @State pour des propriétés simples détenues par une seule vue. Lorsque la valeur change, la vue se met à jour."
            },
            {
                type: "code",
                code: `struct CounterView: View {
    @State private var count = 0

    var body: some View {
        Button("Clics : \(count)") {
            count += 1
        }
    }
}`
            }
        ]
    },
    "nav-stack": {
        title: "NavigationStack",
        sections: [
            {
                type: "text",
                content: "NavigationStack est la vue racine pour créer une navigation hiérarchique dans SwiftUI. Elle gère l'historique de navigation."
            },
            {
                type: "code",
                title: "NavigationStack de base",
                language: "swift",
                code: `NavigationStack {
    List(1...5, id: \\.self) { i in
        NavigationLink("Élément \(i)", value: i)
    }
    .navigationDestination(for: Int.self) { i in
        Text("Détail de l'élément \(i)")
    }
    .navigationTitle("Accueil")
}`
            }
        ]
    },
    "nav-link": {
        title: "NavigationLink",
        sections: [
            {
                type: "text",
                content: "NavigationLink crée un bouton qui déclenche une transition vers une autre vue."
            },
            {
                type: "code",
                title: "Lien simple",
                language: "swift",
                code: `NavigationLink("Aller au Détail") {
    Text("Ceci est la vue de détail")
}`
            },
            {
                type: "text",
                content: "Pour une navigation basée sur les données, utilisez des types de valeurs valides avec `navigationDestination`."
            },
            {
                type: "code",
                title: "Lien de données",
                language: "swift",
                code: `NavigationLink("Voir le Profil", value: user)`
            }
        ]
    },
    "colors": {
        title: "Couleurs & Dégradés",
        sections: [
            {
                type: "text",
                content: "SwiftUI fournit des couleurs standard et la possibilité d'en définir des personnalisées. Les couleurs s'adaptent aux modes sombre et clair."
            },
            {
                type: "code",
                title: "Couleurs Standard",
                language: "swift",
                code: `Text("Bonjour")
    .foregroundColor(.blue) // Couleur standard
    .background(Color.yellow)`
            },
            {
                type: "text",
                content: "Vous pouvez également utiliser des dégradés pour les arrière-plans ou les superpositions de texte."
            },
            {
                type: "code",
                title: "Dégradé",
                language: "swift",
                code: `RoundedRectangle(cornerRadius: 10)
    .fill(
        LinearGradient(
            colors: [.blue, .purple],
            startPoint: .topLeading,
            endPoint: .bottomTrailing
        )
    )
    .frame(width: 200, height: 100)`
            }
        ]
    },
    "images": {
        title: "Images & Symboles SF",
        sections: [
            {
                type: "text",
                content: "SwiftUI permet d'afficher facilement des images depuis vos ressources (assets) ou des icônes système via les Symboles SF."
            },
            {
                type: "code",
                title: "Image du projet",
                language: "swift",
                code: `Image("nom-de-mon-image")
    .resizable()
    .scaledToFit()
    .frame(width: 200)`
            },
            {
                type: "code",
                title: "Symbole SF",
                language: "swift",
                code: `Image(systemName: "star.fill")
    .foregroundColor(.yellow)
    .font(.system(size: 50))`
            }
        ]
    },
    "spacers": {
        title: "Spacers & Dividers",
        sections: [
            {
                type: "text",
                content: "La vue Spacer s'étire pour remplir tout l'espace disponible. Elle est utilisée pour pousser le contenu vers les bords ou séparer des vues."
            },
            {
                type: "code",
                title: "Exemple Spacer",
                language: "swift",
                code: `HStack {
    Text("Gauche")
    Spacer()
    Text("Droite")
}`
            },
            {
                type: "text",
                content: "Divider crée une fine ligne visible pour séparer le contenu."
            },
            {
                type: "code",
                title: "Divider",
                language: "swift",
                code: `VStack {
    Text("Au-dessus")
    Divider()
    Text("En-dessous")
}`
            }
        ]
    },
    "padding-frame": {
        title: "Padding & Frames",
        sections: [
            {
                type: "text",
                content: "Le Padding ajoute de l'espace autour d'une vue, tandis que Frame force une vue à une taille spécifique."
            },
            {
                type: "code",
                title: "Padding",
                language: "swift",
                code: `Text("Bonjour")
    .padding() // Padding par défaut
    .background(Color.blue)`
            },
            {
                type: "code",
                title: "Frame",
                language: "swift",
                code: `Image(systemName: "globe")
    .frame(width: 100, height: 100)
    .background(Color.gray)`
            }
        ]
    },
    "safe-area": {
        title: "Zone de Sécurité (Safe Area)",
        sections: [
            {
                type: "text",
                content: "Par défaut, les vues SwiftUI restent dans la 'Zone de Sécurité' pour éviter d'être couvertes par l'interface système (commes l'encoche/notch)."
            },
            {
                type: "text",
                content: "Pour étendre le contenu jusqu'aux bords, utilisez .ignoresSafeArea()."
            },
            {
                type: "code",
                title: "Ignorer la zone de sécurité",
                language: "swift",
                code: `Color.blue
    .ignoresSafeArea()`
            }
        ]
    },
    "dark-mode": {
        title: "Mode Sombre & Clair",
        sections: [
            {
                type: "text",
                content: "Les vues SwiftUI s'adaptent automatiquement au mode d'apparence du système. Les couleurs standard comme .primary et .background changent automatiquement."
            },
            {
                type: "text",
                content: "Vous pouvez prévisualiser le mode sombre dans le canvas."
            },
            {
                type: "code",
                title: "Aperçu Mode Sombre",
                language: "swift",
                code: `#Preview {
    ContentView()
        .preferredColorScheme(.dark)
}`
            }
        ]
    },
    "canvas": {
        title: "Le Canvas & les Previews",
        sections: [
            {
                type: "text",
                content: "Le Canvas vous permet de voir un aperçu en direct de votre code SwiftUI sans lancer le simulateur."
            },
            {
                type: "code",
                title: "Macro #Preview",
                language: "swift",
                code: `import SwiftUI

struct ContentView: View {
    var body: some View {
        Text("Bonjour !")
    }
}

#Preview {
    ContentView()
}`
            }
        ]
    },
    "buttons": {
        title: "Boutons & Actions",
        sections: [
            {
                type: "text",
                content: "Les boutons sont le principal moyen de déclencher des actions en SwiftUI. Ils se composent d'une action (ce qui se passe lors de l'appui) et d'un label (l'apparence du bouton)."
            },
            {
                type: "code",
                title: "Bouton Basique",
                language: "swift",
                code: `Button("Cliquez-moi") {
    print("Bouton appuyé !")
}`
            },
            {
                type: "text",
                content: "Vous pouvez entièrement personnaliser l'apparence du bouton en utilisant une fermeture (closure) pour le label."
            },
            {
                type: "code",
                title: "Bouton Personnalisé",
                language: "swift",
                code: `Button(action: {
    print("Bouton personnalisé appuyé")
}) {
    HStack {
        Image(systemName: "star.fill")
        Text("Favori")
    }
    .padding()
    .background(Color.yellow)
    .cornerRadius(8)
}`
            },
            {
                type: "tip",
                content: "Si vous avez plusieurs boutons à la suite (par exemple, dans un Formulaire), utilisez .buttonStyle(.borderless) pour vous assurer qu'ils fonctionnent indépendamment."
            }
        ]
    },
    "inputs": {
        title: "TextField & Toggles",
        sections: [
            {
                type: "text",
                content: "Le TextField permet aux utilisateurs de saisir du texte. Il nécessite une liaison (binding) vers une variable d'état pour stocker la saisie."
            },
            {
                type: "code",
                title: "TextField Basique",
                language: "swift",
                code: `struct LoginView: View {
    @State private var username: String = ""

    var body: some View {
        TextField("Saisissez votre nom d'utilisateur", text: $username)
            .textFieldStyle(.roundedBorder)
            .padding()
    }
}`
            },
            {
                type: "text",
                content: "Vous pouvez personnaliser le type de clavier pour des saisies spécifiques, comme les nombres ou les adresses e-mail."
            },
            {
                type: "code",
                title: "Types de Clavier",
                language: "swift",
                code: `TextField("Âge", text: $age)
    .keyboardType(.numberPad)

TextField("E-mail", text: $email)
    .keyboardType(.emailAddress)`
            },
            {
                type: "heading",
                content: "Lier un Nombre (Int/Double)"
            },
            {
                type: "note",
                content: "Nouveau : Voici comment gérer les nombres dans les champs de texte."
            },
            {
                type: "text",
                content: "Pour lier directement une variable numérique (Int ou Double) à un TextField, utilisez le paramètre `value` et `format`."
            },
            {
                type: "code",
                title: "TextField avec Int",
                language: "swift",
                code: `@State private var quantity: Int = 1

TextField("Quantité", value: $quantity, format: .number)
    .keyboardType(.numberPad)`
            },
            {
                type: "heading",
                content: "Toggle (Interrupteur)"
            },
            {
                type: "text",
                content: "Un Toggle se comporte comme un interrupteur pour contrôler un état booléen."
            },
            {
                type: "code",
                title: "Exemple de Toggle",
                language: "swift",
                code: `@State private var isOn = false

Toggle("Activer les Notifications", isOn: $isOn)
    .padding()`
            }
        ]
    },
    "variables-fr": {
        title: "Variables et Constantes (FR)",
        sections: [
            {
                type: "text",
                content: "En Swift, vous utilisez `var` pour les variables (valeurs modifiables) et `let` pour les constantes (valeurs fixes)."
            },
            {
                type: "code",
                title: "Déclaration",
                language: "swift",
                code: `var nom: String = "Alice" // Peut être modifié
let naissance: Int = 2000 // Ne peut PAS être modifié

nom = "Bob" // OK
// naissance = 2001 // Erreur !`
            },
            {
                type: "heading",
                content: "Types de base"
            },
            {
                type: "list",
                items: [
                    "String: Chaîne de caractères (\"Bonjour\")",
                    "Int: Nombre entier (42)",
                    "Double: Nombre décimal (3.14)",
                    "Bool: Booléen (true ou false)"
                ]
            }
        ]
    },
    "collections-fr": {
        title: "Collections et Boucles (FR)",
        sections: [
            {
                type: "heading",
                content: "Les Tableaux (Arrays)"
            },
            {
                type: "text",
                content: "Un tableau stocke une liste ordonnée de valeurs du même type."
            },
            {
                type: "code",
                title: "Tableaux",
                language: "swift",
                code: `var fruits = ["Pomme", "Banane", "Orange"]
fruits.append("Fraise")
print(fruits[0]) // Affiche "Pomme"`
            },
            {
                type: "heading",
                content: "Les Boucles (Loops)"
            },
            {
                type: "text",
                content: "Utilisez `for-in` pour parcourir un tableau ou une plage de nombres."
            },
            {
                type: "code",
                title: "Boucles",
                language: "swift",
                code: `// Parcourir un tableau
for fruit in fruits {
    print("J'aime la \(fruit)")
}

// Boucle avec une plage (Range)
for i in 1...5 {
        .preferredColorScheme(.dark)
}`
            }
        ]
    },
    "canvas": {
        title: "Le Canvas & les Previews",
        sections: [
            {
                type: "text",
                content: "Le Canvas vous permet de voir un aperçu en direct de votre code SwiftUI sans lancer le simulateur."
            },
            {
                type: "code",
                title: "Macro #Preview",
                language: "swift",
                code: `import SwiftUI

struct ContentView: View {
    var body: some View {
        Text("Bonjour !")
    }
}

#Preview {
    ContentView()
}`
            }
        ]
    },
    "buttons": {
        title: "Boutons & Actions",
        sections: [
            {
                type: "text",
                content: "Les boutons sont le principal moyen de déclencher des actions en SwiftUI. Ils se composent d'une action (ce qui se passe lors de l'appui) et d'un label (l'apparence du bouton)."
            },
            {
                type: "code",
                title: "Bouton Basique",
                language: "swift",
                code: `Button("Cliquez-moi") {
    print("Bouton appuyé !")
}`
            },
            {
                type: "text",
                content: "Vous pouvez entièrement personnaliser l'apparence du bouton en utilisant une fermeture (closure) pour le label."
            },
            {
                type: "code",
                title: "Bouton Personnalisé",
                language: "swift",
                code: `Button(action: {
    print("Bouton personnalisé appuyé")
}) {
    HStack {
        Image(systemName: "star.fill")
        Text("Favori")
    }
    .padding()
    .background(Color.yellow)
    .cornerRadius(8)
}`
            },
            {
                type: "tip",
                content: "Si vous avez plusieurs boutons à la suite (par exemple, dans un Formulaire), utilisez .buttonStyle(.borderless) pour vous assurer qu'ils fonctionnent indépendamment."
            }
        ]
    },
    "inputs": {
        title: "TextField & Toggles",
        sections: [
            {
                type: "text",
                content: "Le TextField permet aux utilisateurs de saisir du texte. Il nécessite une liaison (binding) vers une variable d'état pour stocker la saisie."
            },
            {
                type: "code",
                title: "TextField Basique",
                language: "swift",
                code: `struct LoginView: View {
    @State private var username: String = ""

    var body: some View {
        TextField("Saisissez votre nom d'utilisateur", text: $username)
            .textFieldStyle(.roundedBorder)
            .padding()
    }
}`
            },
            {
                type: "text",
                content: "Vous pouvez personnaliser le type de clavier pour des saisies spécifiques, comme les nombres ou les adresses e-mail."
            },
            {
                type: "code",
                title: "Types de Clavier",
                language: "swift",
                code: `TextField("Âge", text: $age)
    .keyboardType(.numberPad)

TextField("E-mail", text: $email)
    .keyboardType(.emailAddress)`
            },
            {
                type: "heading",
                content: "Toggle (Interrupteur)"
            },
            {
                type: "text",
                content: "Un Toggle se comporte comme un interrupteur pour contrôler un état booléen."
            },
            {
                type: "code",
                title: "Exemple de Toggle",
                language: "swift",
                code: `@State private var isOn = false

Toggle("Activer les Notifications", isOn: $isOn)
    .padding()`
            }
        ]
    },
    "variables-fr": {
        title: "Variables et Constantes (FR)",
        sections: [
            {
                type: "text",
                content: "En Swift, vous utilisez `var` pour les variables (valeurs modifiables) et `let` pour les constantes (valeurs fixes)."
            },
            {
                type: "code",
                title: "Déclaration",
                language: "swift",
                code: `var nom = "Alice" // Peut être modifié
let naissance = 2000 // Ne peut PAS être modifié

nom = "Bob" // OK
// naissance = 2001 // Erreur !`
            },
            {
                type: "heading",
                content: "Types de base"
            },
            {
                type: "list",
                items: [
                    "String: Chaîne de caractères (\"Bonjour\")",
                    "Int: Nombre entier (42)",
                    "Double: Nombre décimal (3.14)",
                    "Bool: Booléen (true ou false)"
                ]
            }
        ]
    },
    "collections-fr": {
        title: "Collections et Boucles (FR)",
        sections: [
            {
                type: "heading",
                content: "Les Tableaux (Arrays)"
            },
            {
                type: "text",
                content: "Un tableau stocke une liste ordonnée de valeurs du même type."
            },
            {
                type: "code",
                title: "Tableaux",
                language: "swift",
                code: `var fruits = ["Pomme", "Banane", "Orange"]
fruits.append("Fraise")
print(fruits[0]) // Affiche "Pomme"`
            },
            {
                type: "heading",
                content: "Les Boucles (Loops)"
            },
            {
                type: "text",
                content: "Utilisez `for-in` pour parcourir un tableau ou une plage de nombres."
            },
            {
                type: "code",
                title: "Boucles",
                language: "swift",
                code: `// Parcourir un tableau
for fruit in fruits {
    print("J'aime la \(fruit)")
}

// Boucle avec une plage (Range)
for i in 1...5 {
    print("Compteur : \(i)")
}

// Boucle avec Index (enumerated)
for (index, fruit) in fruits.enumerated() {
    print("Fruit n°\(index + 1) : \(fruit)")
}

// Cas d'usage : 
// 1. Afficher un classement (1. Or, 2. Argent...)
// 2. Alterner les couleurs (si index est pair/impair)
// 3. Modifier un élément spécifique dans un autre tableau via son index`
            },
            {
                type: "heading",
                content: "Cas Pratique : .enumerated()"
            },
            {
                type: "text",
                content: "L'option `.enumerated()` est très utile quand vous avez besoin de la position de l'élément en plus de sa valeur."
            },
            {
                type: "code",
                title: "Exemple Couleur Alternée",
                language: "swift",
                code: `let joueurs = ["Alice", "Bob", "Charlie", "David"]
                
List {
    ForEach(Array(joueurs.enumerated()), id: \.offset) { index, joueur in
        Text(joueur)
            .listRowBackground(index % 2 == 0 ? Color.white : Color.gray.opacity(0.2))
    }
}
// Note : Dans ForEach SwiftUI, c'est un peu plus complexe car il faut convertir en Array.
// Pour une simple boucle for-in Swift : 
for (index, nom) in joueurs.enumerated() {
    if index == 0 {
        print("\(nom) est le premier !")
    }
}`
            }
        ]
    },
    "structures-classes-fr": {
        title: "Structures & Classes (FR)",
        sections: [
            {
                type: "text",
                content: "Structures (`struct`) et Classes (`class`) sont les blocs de construction de vos données. En SwiftUI, on utilise *beaucoup* de structures."
            },
            {
                type: "heading",
                content: "Structures (Value Type)"
            },
            {
                type: "text",
                content: "Les structures sont des types par valeur. Quand vous les passez, elles sont copiées. Elles sont plus sûres et plus rapides pour les données simples."
            },
            {
                type: "code",
                title: "Exemple Struct",
                language: "swift",
                code: `struct Article {
    var titre: String
    var auteur: String
}

var a1 = Article(titre: "News", auteur: "Moi")
var a2 = a1 // COPIE
a2.titre = "Scoop"

// a1.titre est toujours "News"
// a2.titre est "Scoop"`
            },
            {
                type: "heading",
                content: "Classes (Reference Type)"
            },
            {
                type: "text",
                content: "Les classes sont des types par référence. Quand vous les passez, vous partagez la *même* instance."
            },
            {
                type: "code",
                title: "Exemple Class",
                language: "swift",
                code: `class UserSetting {
    var theme: String = "Light"
}

var s1 = UserSetting()
var s2 = s1 // RÉFÉRENCE partagée
s2.theme = "Dark"

// s1.theme devient AUSSI "Dark"`
            },
            {
                type: "text",
                content: "En résumé : Utilisez `struct` par défaut (Vues, Modèles de données). Utilisez `class` quand vous avez besoin de partager des données vivantes (ObservableObject, ViewModel)."
            }
        ]
    },
    "ui-interactif-fr": {
        title: "Interface Interactive (FR)",
        sections: [
            {
                type: "heading",
                content: "Les Boutons (Button)"
            },
            {
                type: "text",
                content: "Un bouton déclenche une action lorsqu'il est appuyé."
            },
            {
                type: "code",
                title: "Bouton simple",
                language: "swift",
                code: `Button(action: {
    print("Bouton appuyé !")
}) {
    Text("Cliquez-moi")
        .padding()
        .background(Color.blue)
        .foregroundColor(.white)
        .cornerRadius(10)
}`
            },
        ]
    },
    "loops-ui-fr": {
        title: "Boucles dans l'Interface",
        description: "Affichez des listes et répétez des vues avec ForEach.",
        sections: [
            {
                id: "foreach-range",
                type: "code",
                title: "ForEach avec une Plage",
                language: "swift",
                code: `VStack {
    // Répète le texte 5 fois (de 0 à 4)
    ForEach(0..<5) { index in
        Text("Élément numéro \(index)")
    }
}`
            },
            {
                id: "foreach-array",
                type: "code",
                title: "ForEach avec un Tableau",
                language: "swift",
                code: `let amis = ["Alice", "Bob", "Charlie"]

VStack {
    // id: \.self signifie "utilise le texte lui-même comme identifiant"
    ForEach(amis, id: \.self) { ami in
        Text("Bonjour, \(ami) !")
    }
}`
            },
            {
                id: "list",
                type: "code",
                title: "List vs VStack",
                language: "swift",
                code: `List(0..<100) { i in
    Text("Ligne \(i)")
}`
            }
        ]
    },
    "array-methods-fr": {
        title: "Méthodes de Tableau (Avancé)",
        description: "Devenez un expert des tableaux avec ces méthodes essentielles.",
        sections: [
            {
                type: "text",
                content: "Vérifiez le contenu de vos tableaux en un clin d'œil."
            },
            {
                type: "heading",
                content: "allSatisfy"
            },
            {
                type: "text",
                content: "Vérifie si tous les éléments respectent une condition."
            },
            {
                type: "code",
                title: "Exemple allSatisfy",
                language: "swift",
                code: `let notes = [12, 15, 18]
let tousLaMoyenne = notes.allSatisfy { $0 >= 10 } 
// true`
            },
            {
                type: "heading",
                content: "starts(with:)"
            },
            {
                type: "text",
                content: "Vérifie si le tableau commence par une séquence donnée."
            },
            {
                type: "code",
                title: "Exemple starts(with:)",
                language: "swift",
                code: `let phrase = ["Bonjour", "le", "monde"]
print(phrase.starts(with: ["Bonjour", "le"])) 
// true`
            },
            {
                type: "heading",
                content: "firstIndex(of:) / firstIndex(where:)"
            },
            {
                type: "text",
                content: "Trouve la position d'un élément."
            },
            {
                type: "code",
                title: "Exemple firstIndex",
                language: "swift",
                code: `let fruits = ["Pomme", "Banane", "Orange"]
if let index = fruits.firstIndex(of: "Banane") {
    print("Banane est à l'index \(index)") // 1
}`
            },
            {
                type: "heading",
                content: "min() / max()"
            },
            {
                type: "text",
                content: "Trouve la plus petite ou la plus grande valeur."
            },
            {
                type: "code",
                title: "Exemple min/max",
                language: "swift",
                code: `let chiffres = [5, 1, 9, 3]
print(chiffres.min()) // Optional(1)
print(chiffres.max()) // Optional(9)`
            },
            {
                type: "heading",
                content: "Trier et Mélanger"
            },
            {
                type: "text",
                content: "Attention à la différence entre les méthodes qui modifient le tableau (en place) et celles qui en renvoient un nouveau."
            },
            {
                type: "heading",
                content: "sort() vs sorted()"
            },
            {
                type: "code",
                title: "Exemple sort usage",
                language: "swift",
                code: `var nombres = [5, 2, 8]

// sorted() renvoie une NOUVELLE copie triée
let tries = nombres.sorted() 
// tries vaut [2, 5, 8], nombres ne change pas

// sort() modifie le tableau LUI-MÊME
nombres.sort() 
// nombres vaut maintenant [2, 5, 8]`
            },
            {
                type: "heading",
                content: "shuffle() vs shuffled()"
            },
            {
                type: "text",
                content: "Même principe : shuffle() mélange sur place, shuffled() renvoie un nouveau tableau mélangé."
            },
            {
                type: "code",
                title: "Exemple shuffle",
                language: "swift",
                code: `var cartes = ["As", "Roi", "Dame"]
cartes.shuffle()
// Par exemple : ["Dame", "As", "Roi"]`
            },
            {
                type: "heading",
                content: "replaceSubrange"
            },
            {
                type: "text",
                content: "Remplace une partie du tableau."
            },
            {
                type: "code",
                title: "Exemple replaceSubrange",
                language: "swift",
                code: `var mots = ["A", "B", "C", "D"]
mots.replaceSubrange(1...2, with: ["X", "Y"])
// ["A", "X", "Y", "D"]`
            },
            {
                type: "heading",
                content: "Manipulation & Transformation"
            },
            {
                type: "heading",
                content: "reduce"
            },
            {
                type: "text",
                content: "Combine tous les éléments en une seule valeur."
            },
            {
                type: "code",
                title: "Exemple reduce",
                language: "swift",
                code: `let prix = [10, 20, 50]
let total = prix.reduce(0) { $0 + $1 }
// 0 (valeur de départ) + 10 + 20 + 50 = 80`
            },
            {
                type: "heading",
                content: "dropFirst() / dropLast()"
            },
            {
                type: "text",
                content: "Ignore les premiers/derniers éléments (renvoie une sous-séquence)."
            },
            {
                type: "code",
                title: "Exemple drop",
                language: "swift",
                code: `let liste = [1, 2, 3, 4]
let sansLePremier = liste.dropFirst() // [2, 3, 4]
let sansLesDeuxPremiers = liste.dropFirst(2) // [3, 4]`
            },
            {
                type: "heading",
                content: "randomElement()"
            },
            {
                type: "text",
                content: "Renvoie un élément au hasard."
            },
            {
                type: "code",
                title: "Exemple randomElement",
                language: "swift",
                code: `let choix = ["Pierre", "Papier", "Ciseaux"]
print(choix.randomElement()!) 
// Peut afficher n'importe lequel`
            },
            {
                type: "heading",
                content: "Map & Filter (Rappel)"
            },
            {
                type: "code",
                title: "Rappel Map/Filter",
                language: "swift",
                code: `// Map : Transformer
let carres = [2, 3, 4].map { $0 * $0 } // [4, 9, 16]

// Filter : Garder
let pairs = [1, 2, 3, 4].filter { $0 % 2 == 0 } // [2, 4]`
            }
        ]
    },
    "ui-toolbar-popup-fr": {
        title: "Barres d'outils et Popups",
        description: "Apprenez à enrichir votre interface avec des barres d'outils, des feuilles (sheets) et des alertes.",
        sections: [
            {
                type: "heading",
                content: "La Barre d'Outils (Toolbar)"
            },
            {
                type: "text",
                content: "La `.toolbar` permet de placer des boutons et du texte autour de votre contenu principal, généralement dans la barre de navigation ou en bas de l'écran."
            },
            {
                type: "heading",
                content: "ToolbarItem & Placement"
            },
            {
                type: "text",
                content: "Chaque élément de la barre d'outils est un `ToolbarItem`. Le paramètre `placement` décide où il s'affiche."
            },
            {
                type: "list",
                items: [
                    ".topBarLeading : En haut à gauche",
                    ".topBarTrailing : En haut à droite (Action principale)",
                    ".bottomBar : En bas de l'écran",
                    ".keyboard : Au-dessus du clavier (quand il est visible)"
                ]
            },
            {
                type: "code",
                title: "Toolbar Complète",
                language: "swift",
                code: `NavigationStack {
    Text("Mon Éditeur")
        .toolbar {
            // Bouton en haut à gauche (Annuler/Retour)
            ToolbarItem(placement: .topBarLeading) {
                Button("Annuler") { }
            }
            
            // Bouton en haut à droite (Sauvegarder)
            ToolbarItem(placement: .topBarTrailing) {
                Button(action: { print("Sauvegardé") }) {
                    Image(systemName: "checkmark")
                }
            }
            
            // Groupe de boutons en bas
            ToolbarItemGroup(placement: .bottomBar) {
                Button("Filtre") { }
                Spacer() // Pousse les boutons vers les bords
                Button("Trier") { }
            }
        }
}`
            },
            {
                type: "heading",
                content: "Les Popups (Sheets)"
            },
            {
                type: "text",
                content: "Une 'Sheet' est une vue modale qui glisse par-dessus l'écran actuel. Elle est parfaite pour des formulaires ou des détails."
            },
            {
                type: "code",
                title: "Exemple Sheet",
                language: "swift",
                code: `@State private var montrePopup = false

Button("Ouvrir le profil") {
    montrePopup = true
}
.sheet(isPresented: $montrePopup) {
    VStack {
        Text("Voici votre profil")
        Button("Fermer") { montrePopup = false }
    }
    .padding()
    // .presentationDetents([.medium, .large]) // Pour contrôler la hauteur (iOS 16+)
}`
            },
            {
                type: "heading",
                content: "Les Alertes"
            },
            {
                type: "code",
                title: "Alert simple",
                language: "swift",
                code: `.alert("Erreur", isPresented: $showError) {
    Button("OK", role: .cancel) { }
} message: {
    Text("Une erreur est survenue lors du chargement.")
}`
            }
        ]
    },
    "async-programming-fr": {
        title: "Programmation Asynchrone",
        description: "Gérez les tâches de fond et le temps avec DispatchQueue.",
        sections: [
            {
                type: "heading",
                content: "Le Grand Principe : Main Thread vs Background"
            },
            {
                type: "text",
                content: "Imaginez deux files d'attente :\n1. **Main Queue (Principal)** : C'est là que l'interface (UI) est dessinée. Si vous la bloquez, l'app gèle.\n2. **Background Queues** : Pour les calculs longs, téléchargements, etc."
            },
            {
                type: "heading",
                content: "DispatchQueue.main.async"
            },
            {
                type: "text",
                content: "Utilisez ceci quand vous êtes dans une tâche de fond (background) et que vous devez mettre à jour l'interface."
            },
            {
                type: "code",
                title: "Retour au Main Thread",
                language: "swift",
                code: `// Simulation d'une tâche longue en arrière-plan
DispatchQueue.global().async {
    let data = chargerDonneesLourdes()
    
    // ⚠️ INTERDIT de toucher l'UI ici !
    
    // On revient sur le fil principal pour afficher
    DispatchQueue.main.async {
        self.mesDonnees = data // ✅ OK
    }
}`
            },
            {
                type: "heading",
                content: "DispatchQueue.main.asyncAfter (Délai)"
            },
            {
                type: "text",
                content: "Permet d'exécuter du code **après un certain temps**. C'est très utile pour l'UX (User Experience)."
            },
            {
                type: "heading",
                content: "Comment l'utiliser ?"
            },
            {
                type: "code",
                title: "Syntaxe asyncAfter",
                language: "swift",
                code: `// .now() + 2 signifie "dans 2 secondes à partir de maintenant"
DispatchQueue.main.asyncAfter(deadline: .now() + 2.0) {
    withAnimation {
        self.messageVisible = false
    }
}`
            },
            {
                type: "heading",
                content: "Quand l'utiliser ? (Cas concrets)"
            },
            {
                type: "list",
                items: [
                    "⏱️ **Fermer une notification** : Afficher un message de succès (\"Enregistré !\") et le faire disparaître après 2 secondes.",
                    "🔄 **Simuler un chargement** : Pour tester votre UI de chargement sans vrai réseau.",
                    "🎬 **Séquencer des animations** : Lancer une animation A, attendre 0.5s, puis lancer l'animation B.",
                    "🚫 **Debounce (Anti-rebond)** : Attendre que l'utilisateur arrête de taper avant de lancer une recherche (bien que Combine soit mieux pour ça)."
                ]
            },
            {
                type: "note",
                content: "Attention : Si l'utilisateur quitte l'écran avant la fin du délai, le code s'exécutera quand même (sauf si vous utilisez des mécanismes d'annulation plus avancés comme Task/async-await). Pour des délais simples, c'est parfait."
            }
        ]
    },
    "object-oriented-fr": {
        title: "Classes de A à Z",
        description: "Apprenez à créer et utiliser des classes en Swift.",
        sections: [
            {
                type: "heading",
                content: "Qu'est-ce qu'une Classe ?"
            },
            {
                type: "text",
                content: "Une classe est comme un plan (blueprint) pour créer des objets. Elle regroupe des données (propriétés) et des actions (méthodes)."
            },
            {
                type: "code",
                title: "Créer une classe simple",
                language: "swift",
                code: `class Voiture {
    var marque: String
    var vitesse: Int = 0

    // Initialiseur (Constructeur)
    init(marque: String) {
        self.marque = marque
    }

    // Méthode (Action)
    func accelerer() {
        vitesse += 10
        print("La \(marque) roule à \(vitesse) km/h")
    }
}`
            },
            {
                type: "heading",
                content: "Utiliser la Classe"
            },
            {
                type: "code",
                title: "Instanciation",
                language: "swift",
                code: `// Créer un objet (instance)
let maVoiture = Voiture(marque: "Tesla")

// Appeler une action
maVoiture.accelerer() // La Tesla roule à 10 km/h`
            }
        ]
    },
    "reusable-views-fr": {
        title: "Vues Réutilisables",
        description: "Organisez votre code en créant des composants et des styles réutilisables.",
        sections: [
            {
                type: "heading",
                content: "Créer une Sous-Vue (Sub-view)"
            },
            {
                type: "text",
                content: "Pour éviter d'avoir des fichiers trop gros, on sépare l'interface en petits morceaux."
            },
            {
                type: "code",
                title: "Exemple Composant Carte",
                language: "swift",
                code: `struct CardView: View {
    let titre: String
    let icone: String

    var body: some View {
        HStack {
            Image(systemName: icone)
            Text(titre)
        }
        .padding()
        .background(Color.secondary.opacity(0.1))
        .cornerRadius(10)
    }
}`
            },
            {
                type: "heading",
                content: "Utilisation Parent-Enfant"
            },
            {
                type: "code",
                title: "Boucle sur des Sous-Vues",
                language: "swift",
                code: `struct MenuView: View {
    let options = ["Accueil", "Profil", "Paramètres"]

    var body: some View {
        VStack {
            ForEach(options, id: \.self) { option in
                CardView(titre: option, icone: "star")
            }
        }
    }
}`
            },
            {
                type: "heading",
                content: "Styles Réutilisables (ViewModifier)"
            },
            {
                type: "text",
                content: "Vous pouvez créer vos propres modificateurs pour appliquer le même style partout."
            },
            {
                type: "code",
                title: "Custom Modifier",
                language: "swift",
                code: `struct TitreBleu: ViewModifier {
    func body(content: Content) -> some View {
        content
            .font(.largeTitle)
            .foregroundColor(.blue)
            .bold()
    }
}

// Utilisation
Text("Bonjour")
    .modifier(TitreBleu())`
            }
        ]
    },
    "functions-fr": {
        title: "Fonctions & Conversion",
        description: "Apprenez à vérifier les types, convertir des String en Int/Double et organiser vos fonctions.",
        sections: [
            {
                type: "heading",
                content: "1. Vérifier et Convertir (String -> Nombre)"
            },
            {
                type: "text",
                content: "Souvent, on reçoit du texte (TextField) mais on veut faire des calculs. Swift est très strict sur les types."
            },
            {
                type: "code",
                title: "Le problème",
                language: "swift",
                code: `let texte = "123"
// let nombre: Int = texte // ❌ Erreur : Impossible de convertir String en Int directement`
            },
            {
                type: "text",
                content: "La solution : Utiliser `Int(texte)` ou `Double(texte)`. Cela renvoie un **Optionnel** car la conversion peut échouer (ex: \"bonjour\" n'est pas un nombre)."
            },
            {
                type: "code",
                title: "Exemple de Conversion Sûre",
                language: "swift",
                code: `@State private var texteUtilisateur = ""
@State private var nombreFinal: Int = 0

func validerEtConvertir() {
    // On essaie de convertir le texte en entier
    if let nombreConverti = Int(texteUtilisateur) {
        // ✅ C'est un nombre valide !
        nombreFinal = nombreConverti
    } else {
        // ❌ Ce n'est pas un nombre (ex: "abc")
        print("Erreur : Veuillez entrer un chiffre valide")
    }
}`
            },
            {
                type: "heading",
                content: "Pour les nombres décimaux (Double)"
            },
            {
                type: "code",
                title: "Double",
                language: "swift",
                code: `if let prix = Double(prixTexte) {
    print("Le prix est \(prix) €")
} else {
    print("Format de prix invalide")
}`
            },
            {
                type: "heading",
                content: "Bonne Pratique : Le Clavier (KeyboardType)"
            },
            {
                type: "text",
                content: "Pour aider l'utilisateur, affichez le bon clavier ! Cela évite les erreurs de saisie."
            },
            {
                type: "code",
                title: "TextField avec Clavier Numérique",
                language: "swift",
                code: `TextField("Entrez votre âge", text: $texteUtilisateur)
    .keyboardType(.numberPad) // Clavier chiffres uniquement
    // .keyboardType(.decimalPad) // Pour les nombres à virgule
    .padding()
    .textFieldStyle(.roundedBorder)`
            },
            {
                type: "heading",
                content: "2. Déclarer des Fonctions"
            },
            {
                type: "text",
                content: "Une fonction regroupe un bloc de code réutilisable."
            },
            {
                type: "code",
                title: "Structure de base",
                language: "swift",
                code: `func nomDeLaFonction(parametre: String) -> Int {
    // Code...
    return 42
}`
            },
            {
                type: "heading",
                content: "3. Où écrire ses fonctions ?"
            },
            {
                type: "text",
                content: "Il y a 3 endroits principaux où placer vos fonctions en SwiftUI :"
            },
            {
                type: "list",
                items: [
                    "📍 **Dans la Vue (Method)** : Quand la fonction doit accéder à `@State` ou aux variables de la vue.",
                    "🛠️ **Extension** : Pour séparer la logique de l'interface (Clean Code).",
                    "📦 **Helper / Service** : Dans un fichier séparé, pour les fonctions utilitaires pures (sans lien avec la vue)."
                ]
            },
            {
                type: "code",
                title: "Option 1 : Dans la Vue (Le plus simple)",
                language: "swift",
                code: `struct MaVue: View {
    @State private var compteur = 0

    var body: some View {
        Button("Incrémenter") {
            incrementer() // Appel de la fonction
        }
    }

    // ✅ La fonction est ici, à l'intérieur de struct MaVue
    // Elle a accès à 'compteur'
    func incrementer() {
        compteur += 1
    }
}`
            },
            {
                type: "code",
                title: "Option 2 : Extension (Plus propre)",
                language: "swift",
                code: `struct MaVue: View {
    @State private var couleur = Color.red

    var body: some View {
        Rectangle().fill(couleur)
            .onTapGesture { changerCouleur() }
    }
}

// On définit les méthodes en dehors, dans une extension
extension MaVue {
    func changerCouleur() {
        couleur = .blue
    }
}`
            }
        ]
    },
    "lists-selection-fr": {
        title: "Listes & Sélection",
        description: "Maîtrisez les listes SwiftUI : sélection, sections, styles et données complexes.",
        sections: [
            {
                type: "heading",
                content: "1. Le Protocole Identifiable"
            },
            {
                type: "text",
                content: "Pour afficher une liste d'objets personnalisés, il est recommandé qu'ils adoptent le protocole `Identifiable`. Cela garantit que chaque ligne est unique."
            },
            {
                type: "code",
                title: "Structure Identifiable",
                language: "swift",
                code: `struct Item: Identifiable {
    var id = UUID() // Identifiant unique généré automatiquement
    var code: String
    var titre: String
    var couleur: Color
}

// Utilisation dans la Liste
struct ContentView: View {
    let items = [
        Item(code: "abc", titre: "Item 1", couleur: .blue),
        Item(code: "def", titre: "Item 2", couleur: .red)
    ]

    var body: some View {
        List(items) { item in
            Text(item.titre)
        }
    }
}`
            },
            {
                type: "heading",
                content: "2. Masquer le fond gris"
            },
            {
                type: "text",
                content: "Par défaut, les listes ont un fond gris (style `.insetGrouped`). On peut le masquer."
            },
            {
                type: "code",
                title: "scrollContentBackground",
                language: "swift",
                code: `List(items) { item in
    Text(item.titre)
}
.scrollContentBackground(.hidden) // Rend le fond transparent`
            },
            {
                type: "heading",
                content: "3. Listes sans Identifiable (id: \\.self)"
            },
            {
                type: "text",
                content: "Si vos données sont simples (Strings, Int) ou ne sont pas Identifiable, utilisez `id: \\.self` (si elles sont `Hashable`)."
            },
            {
                type: "code",
                title: "Exemple avec Strings",
                language: "swift",
                code: `let noms = ["Alice", "Bob", "Charlie"]

List(noms, id: \\.self) { nom in
    Text(nom)
}`
            },
            {
                type: "heading",
                content: "4. Affichage Sophistiqué & Boutons"
            },
            {
                type: "text",
                content: "Vous pouvez mettre n'importe quelle vue dans une cellule de liste."
            },
            {
                type: "code",
                title: "Cellule Complexe",
                language: "swift",
                code: `List(items) { item in
    HStack {
        Image(systemName: "paperclip")
        VStack(alignment: .leading) {
            Text(item.titre).font(.headline)
            Text(item.code).font(.caption).foregroundStyle(item.couleur)
        }
        Spacer()
        // Deux boutons sur la même ligne
        Button(action: {}) { Image(systemName: "pencil") }
        Button(action: {}) { Image(systemName: "trash") }
    }
    .buttonStyle(.borderless) // IMPORTANT pour avoir plusieurs boutons cliquables !
}`
            },
            {
                type: "heading",
                content: "5. Sections avec ForEach"
            },
            {
                type: "text",
                content: "`List` gère le défilement, `ForEach` gère la boucle. On les combine pour faire des sections."
            },
            {
                type: "code",
                title: "Sections",
                language: "swift",
                code: `List {
    Section("Catégorie A") {
        ForEach(itemsA) { item in
            Text(item.titre)
        }
    }
    
    Section("Catégorie B") {
        ForEach(itemsB) { item in
            Text(item.titre)
        }
    }
}`
            },
            {
                type: "heading",
                content: "6. Sélection (Tap Gesture)"
            },
            {
                type: "text",
                content: "Pour sélectionner un élément simple, utilisez `onTapGesture`. Attention : il se place SUR l'élément (Text, HStack...), pas sur la List."
            },
            {
                type: "code",
                title: "Sélection Simple",
                language: "swift",
                code: `@State private var selection: Item?

List(items) { item in
    Text(item.titre)
        .onTapGesture {
            self.selection = item
        }
        .listRowBackground(selection?.id == item.id ? Color.blue.opacity(0.2) : nil) // Changer la couleur si sélectionné
}

if let sel = selection {
    Text("Sélectionné : \(sel.titre)")
}`
            },
            {
                type: "heading",
                content: "7. Sélection Multiple"
            },
            {
                type: "code",
                title: "Multi-Selection",
                language: "swift",
                code: `@State private var selections: [Item] = []

List(items) { item in
    Text(item.titre)
        .onTapGesture {
            if let index = selections.firstIndex(where: { $0.id == item.id }) {
                selections.remove(at: index) // Désélectionner
            } else {
                selections.append(item) // Sélectionner
            }
        }
        .listRowBackground(selections.contains(where: {$0.id == item.id}) ? Color.blue.opacity(0.2) : nil)
}`
            }
        ]
    },
    "appstorage-fr": {
        title: "Préférences (@AppStorage)",
        description: "Sauvegardez des réglages utilisateur simples qui persistent même après le redémarrage de l'app.",
        sections: [
            {
                type: "heading",
                content: "1. Qu'est-ce que @AppStorage ?"
            },
            {
                type: "text",
                content: "C'est un moyen simple de sauvegarder des petites données (préférences) qui restent enregistrées même si on ferme l'application. C'est une enveloppe autour de `UserDefaults`."
            },
            {
                type: "note",
                content: "⚠️ À ne pas utiliser pour des données sensibles (mots de passe) ou volumineuses."
            },
            {
                type: "heading",
                content: "2. Types de données acceptés"
            },
            {
                type: "list",
                items: [
                    "String (Chaîne de caractères)",
                    "Int (Entier)",
                    "Double (Nombre décimal)",
                    "Bool (Vrai/Faux)",
                    "URL",
                    "Data"
                ]
            },
            {
                type: "heading",
                content: "3. Utilisation de base"
            },
            {
                type: "text",
                content: "Il suffit de déclarer la variable avec `@AppStorage(\"cle_unique\")`. SwiftUI gère la lecture et l'écriture automatiquement."
            },
            {
                type: "code",
                title: "Exemple Simple",
                language: "swift",
                code: `struct ContentView: View {
    // "pseudo" est la clé de sauvegarde
    @AppStorage("pseudo") var pseudo: String = "Invité"

    var body: some View {
        VStack {
            Text("Bonjour, \(pseudo)")
            
            Button("Changer de nom") {
                // La sauvegarde est automatique !
                pseudo = "Utilisateur S"
            }
        }
    }
}`
            },
            {
                type: "heading",
                content: "4. Partager entre plusieurs vues"
            },
            {
                type: "text",
                content: "Si vous redéclarez la même clé `@AppStorage` dans une autre vue, elle sera synchronisée automatiquement."
            },
            {
                type: "code",
                title: "Vue Paramètres",
                language: "swift",
                code: `struct SettingsView: View {
    // MÊME clé "pseudo" = MÊME valeur
    @AppStorage("pseudo") var pseudo: String = "Invité"

    var body: some View {
        TextField("Votre pseudo", text: $pseudo)
    }
}`
            },
            {
                type: "heading",
                content: "5. Où est le fichier ? (Avancé)"
            },
            {
                type: "text",
                content: "Les données sont stockées dans un fichier `.plist` dans le dossier Library de l'application."
            },
            {
                type: "code",
                title: "Chemin (Simulateur)",
                language: "text",
                code: `/Users/VotreNom/Library/Developer/CoreSimulator/Devices/.../Library/Preferences/com.votreapp.plist`
            },
            {
                type: "text",
                content: "Vous pouvez inspecter ce fichier pour débugger, mais évitez de le modifier manuellement."
            }
        ]
    },
    "form-fr": {
        title: "Formulaires (Form)",
        sections: [
            {
                type: "text",
                content: "Le composant `Form` est optimisé pour afficher des contrôles de saisie de données regroupés, comme dans l'application Réglages."
            },
            {
                type: "code",
                title: "Structure de base",
                language: "swift",
                code: `Form {
    Section(header: Text("Informations")) {
        TextField("Nom", text: $name)
        Toggle("Notifications", isOn: $notifications)
    }
    
    Section(header: Text("Actions")) {
        Button("Enregistrer") {
            // Action
        }
    }
}`
            },
            {
                type: "heading",
                content: "Sections"
            },
            {
                type: "text",
                content: "Utilisez `Section` pour grouper visuellement les champs. Vous pouvez ajouter un en-tête (header) et un pied de page (footer)."
            },
            {
                type: "heading",
                content: "Exemple Complet : Profil Utilisateur"
            },
            {
                type: "code",
                title: "Formulaire de Profil",
                language: "swift",
                code: `struct ProfileFormView: View {
    @State private var firstName = ""
    @State private var lastName = ""
    @State private var birthDate = Date()
    @State private var shouldSendNewsletter = false
    @State private var numberOfChildren = 0
    @State private var favoriteColor = Color.blue
    
    var body: some View {
        NavigationStack {
            Form {
                Section(header: Text("Informations Personnelles")) {
                    TextField("Prénom", text: $firstName)
                    TextField("Nom", text: $lastName)
                    DatePicker("Date de naissance", selection: $birthDate, displayedComponents: .date)
                }
                
                Section(header: Text("Préférences")) {
                    Toggle("Recevoir la newsletter", isOn: $shouldSendNewsletter)
                    Stepper("Nombre d'enfants : \(numberOfChildren)", value: $numberOfChildren, in: 0...10)
                    ColorPicker("Couleur préférée", selection: $favoriteColor)
                }
                
                Section {
                    Button("Sauvegarder") {
                        print("Profil sauvegardé !")
                    }
                }
            }
            .navigationTitle("Mon Profil")
        }
    }
}`
            }
        ]
    },
    "casting-fr": {
        title: "Conversion de Types (Casting)",
        sections: [
            {
                type: "text",
                content: "Le 'Casting' ou conversion de type est l'action de transformer une valeur d'un type (ex: Int) vers un autre type (ex: String)."
            },
            {
                type: "heading",
                content: "Int vers String"
            },
            {
                type: "text",
                content: "C'est la conversion la plus courante, souvent utilisée pour afficher des nombres dans du texte."
            },
            {
                type: "code",
                title: "Int -> String",
                language: "swift",
                code: `let score = 100
// Méthode 1 : Initialiseur String()
let scoreText = String(score) 

// Méthode 2 : Interpolation (recommandé)
let message = "Votre score est de \(score) points"
`
            },
            {
                type: "heading",
                content: "String vers Int"
            },
            {
                type: "text",
                content: "Attention : Convertir un texte en nombre peut échouer si le texte ne contient pas un nombre valide. Le résultat est donc un Optionnel."
            },
            {
                type: "code",
                title: "String -> Int",
                language: "swift",
                code: `let numberString = "42"
let invalidString = "Quarante-deux"

// Conversion
let myNumber = Int(numberString) // Optional(42)
let myFailedNumber = Int(invalidString) // nil

// Utilisation sécurisée avec if let ou ??
if let safeNumber = Int(numberString) {
    print("Le nombre est \(safeNumber)")
} else {
    print("Ce n'est pas un nombre valide")
}

let conversionRapide = Int(numberString) ?? 0 // 0 par défaut si échec`
            },
            {
                type: "heading",
                content: "Int et Double"
            },
            {
                type: "text",
                content: "Swift est strict : vous ne pouvez pas additionner un Int et un Double sans conversion explicite."
            },
            {
                type: "code",
                title: "Int <-> Double",
                language: "swift",
                code: `let entier = 5
let decimal = 3.14

// let total = entier + decimal // ERREUR !

// Solution : Tout convertir en Double
let totalDouble = Double(entier) + decimal // 8.14

// Ou tout convertir en Int (perd la décimale)
let totalInt = entier + Int(decimal) // 5 + 3 = 8`
            }
        ]
    },
    "string-methods-fr": {
        title: "Méthodes de String",
        sections: [
            {
                type: "text",
                content: "Swift propose de nombreuses méthodes puissantes pour manipuler les chaînes de caractères."
            },
            {
                type: "heading",
                content: "Propriétés de base"
            },
            {
                type: "code",
                title: "Compter et Vérifier",
                language: "swift",
                code: `let message = "Bonjour"
print(message.count) // 7
print(message.isEmpty) // false`
            },
            {
                type: "heading",
                content: "Transformation"
            },
            {
                type: "code",
                title: "Majuscules / Minuscules",
                language: "swift",
                code: `let text = "SwiftUI"
print(text.uppercased()) // "SWIFTUI"
print(text.lowercased()) // "swiftui"`
            },
            {
                type: "heading",
                content: "Recherche et Remplacement"
            },
            {
                type: "code",
                title: "Contient, Préfixe, Suffixe",
                language: "swift",
                code: `let fileName = "image.png"
print(fileName.hasSuffix(".png")) // true
print(fileName.contains(".")) // true`
            },
            {
                type: "code",
                title: "Remplacer",
                language: "swift",
                code: `let greeting = "Bonjour Monde"
let newGreeting = greeting.replacingOccurrences(of: "Monde", with: "Swift")
print(newGreeting) // "Bonjour Swift"`
            }
        ]
    },
    "dictionaries-fr": {
        title: "Dictionnaires (Dictionary)",
        sections: [
            {
                type: "text",
                content: "Un dictionnaire stocke des associations entre des clés uniques et des valeurs. C'est comme un vrai dictionnaire : vous cherchez un mot (clé) pour trouver sa définition (valeur)."
            },
            {
                type: "heading",
                content: "Déclaration"
            },
            {
                type: "code",
                title: "Créer un dictionnaire",
                language: "swift",
                code: `// Dictionnaire vide : [TypeClé: TypeValeur]
var scores: [String: Int] = [:]

// Dictionnaire avec valeurs initiales
var capitales = [
    "France": "Paris",
    "Japon": "Tokyo",
    "Italie": "Rome"
]`
            },
            {
                type: "heading",
                content: "Manipulation"
            },
            {
                type: "text",
                content: "Vous pouvez ajouter, modifier ou lire des valeurs en utilisant la syntaxe par sous-script `[clé]`."
            },
            {
                type: "code",
                title: "Lire et Écrire",
                language: "swift",
                code: `// Ajouter ou Modifier
scores["Alice"] = 10
scores["Bob"] = 8
scores["Alice"] = 12 // Met à jour la valeur existante

// Lire (retourne un Optionnel)
print(scores["Alice"]) // Optional(12)

if let scoreAlice = scores["Alice"] {
    print("Le score d'Alice est \(scoreAlice)")
} else {
    print("Alice n'a pas encore de score")
}

// Supprimer
scores["Bob"] = nil`
            },
            {
                type: "tip",
                content: "Les dictionnaires ne sont pas ordonnés. L'ordre des éléments peut changer."
            }
        ]
    }
};
