import { Footer } from './core/components/footer/footer.component';
import  Header  from './core/components/header/header.component';
import { Index } from './index/index.component';
import  IndexProject  from './projects/components/index-project/index-project.component';
import  FormProject  from './projects/components/form-project/form-project.component';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
export function App() {

    return<>
                <Router>
                    <Header />
                    <Switch>
                        <Route exact path="/">
                            <Index />
                        </Route>
                        <Route  path="/project/index">
                            <IndexProject />
                        </Route>
                        <Route   path="/project/form">
                            <FormProject />
                        </Route>
                        <Route path="/project/edit/:id" >
                            <FormProject />
                        </Route>
                    </Switch>
                    <Footer />
                </Router>
    </>

    
}